import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SmileImage.css";

const SmileImage = () => {
  const [imagesData, setImagesData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [beforeImage2, setBeforeImage2] = useState(null);
  const [afterImage2, setAfterImage2] = useState(null);

  // Categories available for selection
  const categories = [
    "Fractured Teeth Corrections",
    "Attrited Teeth Correction",
    "Decayed Teeth Corrections",
    "Discoloured Teeth Corrections",
    "Malaligned Teeth Corrections",
    "Spacing Between Teeth",
  ];

  // Categories requiring two sets of images
  const categoriesWithTwoSets = [
    "Fractured Teeth Corrections",
    "Discoloured Teeth Corrections",
    "Malaligned Teeth Corrections",
  ];

  // Fetch images from the server
  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/smiles");
      if (response.data.success && Array.isArray(response.data.categories)) {
        console.log(response.data.categories); // Debugging log
        setImagesData(response.data.categories);
      } else {
        setUploadStatus("No categories found.");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setUploadStatus("Error fetching images.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []); // Only fetch once when the component mounts

  // Handle image upload
  const handleImageUpload = async (e) => {
    e.preventDefault();

    if (!selectedCategory || !beforeImage || !afterImage) {
      setUploadStatus("Please select a category and both images.");
      return;
    }

    if (categoriesWithTwoSets.includes(selectedCategory) && (!beforeImage2 || !afterImage2)) {
      setUploadStatus("Please upload both sets of images for this category.");
      return;
    }

    const formData = new FormData();
    formData.append("category", selectedCategory);
    formData.append("beforeImage", beforeImage);
    formData.append("afterImage", afterImage);

    if (categoriesWithTwoSets.includes(selectedCategory)) {
      formData.append("beforeImage2", beforeImage2);
      formData.append("afterImage2", afterImage2);
    }

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/upload/smile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setUploadStatus("Images uploaded successfully.");
        fetchImages(); // Re-fetch images after successful upload
      } else {
        setUploadStatus("Error uploading images.");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      setUploadStatus("Error uploading images.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image deletion
  const handleDelete = async (imageId) => {
    console.log(imageId,"id")
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    setIsLoading(true);
    try {
      const response = await axios.delete(`http://localhost:5000/api/smiles/${imageId}`);
      if (response.data.success) {
        setUploadStatus("Image deleted successfully.");
        fetchImages(); // Re-fetch images after successful deletion
      } else {
        setUploadStatus("Error deleting image.");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      setUploadStatus("Error deleting image.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="admin-container">
      <h1>Admin - Smile Gallery</h1>
      {uploadStatus && <div className="status-message">{uploadStatus}</div>}

      <form onSubmit={handleImageUpload} className="upload-form">
        <label className="form-label">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label className="form-label">Before Image:</label>
        <input
          type="file"
          onChange={(e) => setBeforeImage(e.target.files[0])}
          accept="image/*"
        />

        <label className="form-label">After Image:</label>
        <input
          type="file"
          onChange={(e) => setAfterImage(e.target.files[0])}
          accept="image/*"
        />

        {categoriesWithTwoSets.includes(selectedCategory) && (
          <>
            <label className="form-label">Before Image (Second Set):</label>
            <input
              type="file"
              onChange={(e) => setBeforeImage2(e.target.files[0])}
              accept="image/*"
            />

            <label className="form-label">After Image (Second Set):</label>
            <input
              type="file"
              onChange={(e) => setAfterImage2(e.target.files[0])}
              accept="image/*"
            />
          </>
        )}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload Images"}
        </button>
      </form>

      {/* Table to display images */}
      <h2>Uploaded Images</h2>
      {imagesData && imagesData.length > 0 ? (
        <table className="images-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Before Image</th>
              <th>After Image</th>
              
                <>
                  <th>Before Image (Second Set)</th>
                  <th>After Image (Second Set)</th>
                </>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {imagesData.map((category) => (
              <tr key={category._id}>
                <td>{category.category}</td>
                <td>
                  <img
                    src={category.beforeImageUrl}
                    alt="Before"
                    className="image-thumbnail"
                  />
                </td>
                <td>
                  <img
                    src={category.afterImageUrl}
                    alt="After"
                    className="image-thumbnail"
                  />
                </td>

                {/* Check if the second set exists */}
                {category.beforeImage2Url && category.afterImage2Url ? (
                  <>
                    <td>
                      <img
                        src={category.beforeImage2Url}
                        alt="Before Second Set"
                        className="image-thumbnail"
                      />
                    </td>
                    <td>
                      <img
                        src={category.afterImage2Url}
                        alt="After Second Set"
                        className="image-thumbnail"
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td>null</td>
                    <td>null</td>
                  </>
                )}

                <td>
                  <button onClick={() => handleDelete(category._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No images found. Please upload some images.</p>
      )}
    </div>
  );
};

export default SmileImage;
