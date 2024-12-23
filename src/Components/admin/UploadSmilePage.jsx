import React, { useState } from "react";
import axios from "axios";

function UploadSmilePage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post("/api/upload-smile", formData)
      .then((response) => {
        console.log("File uploaded successfully:", response);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div>
      <h1>Upload Smile Image</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default UploadSmilePage;
