import React from 'react';
import "./Oralandmaxillofacial.css";
import brushingimg from "../assets/brushingtechniques.png";

const Brushingtechniques = () => {
  return (
    <div>
      <div className="container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4" style={{ color: "#00a3ff" }}>
              Brushing Techniques
            </h1>
            <h3 className="fw-bold">How important is brushing?</h3>
            <p>
              Brushing is very important as it keeps our teeth and gums healthy. It
              helps to clean dirt between the gums and the teeth and also between
              two teeth. Brushing technique should be soft (to massage the gums)
              and firm (to remove dirt). Brushing reduces the risk of infection
              and cavities, making both teeth as well as gums strong.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={brushingimg}
              alt="Brushing Techniques"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Section 2: Brushing Methods */}
        <section className="mt-5">
          <h3 className="fw-bold">What are the methods of brushing?</h3>
          <p>
            There are 2 common techniques of brushing i.e., Bass and Fone’s
            methods of brushing. Bass technique is used by adults, and Fone’s is
            for children.
          </p>
          <p>
            <strong>Bass technique</strong> is for routine use; in this, the brush
            is at 45 degrees to the long axis of the teeth. The bristles are used
            to clean the area between the gums and the teeth as well as between
            two teeth. After this, brushing is done with front and back strokes
            along with vibratory action. Posterior and anterior strokes are used
            for the eating surface.
          </p>
          <p>
            <strong>Fone’s technique</strong> is very effective for children. In
            this, the brush is placed at 90 degrees on the outer surface. The
            teeth are closed, and rotary action of the brush helps to clean the
            teeth. This technique is easy to follow.
          </p>
        </section>

        {/* Section 3: Frequency and Brush Types */}
        <section className="mt-5">
          <h3 className="fw-bold">How frequently should we brush the teeth?</h3>
          <p>
            What is important is the quality of brushing rather than the number
            of times. But dentists recommend brushing twice a day, one time in
            the morning and the second time at night before going to bed.
            Frequency of brushing depends on individual oral condition i.e.,
            formation of plaque, gum diseases, caries risk, etc.
          </p>
          <h3 className="fw-bold">What types of brushes are available in the market?</h3>
          <p>
            There are 3 types of brushes. 
            <p><strong>Soft brushes</strong> are for
            those who have sensitive gums. They can clean food particles but if
            the gap between the teeth is less, cleaning becomes difficult.</p>

            <p><strong> Medium brushes</strong> are for those who have healthy gums
            and teeth.
            </p>
            <p> <strong>Hard brushes</strong> are cheap but have a
            negative effect on the teeth; they lead to tooth abrasion which
            exposes the root of the teeth making the teeth sensitive to hot/cold.</p>
          </p>
        </section>

        {/* Section 4: Importance of Toothpaste */}
        <section className="mt-5">
          <h3 className="fw-bold">How important is the toothpaste in brushing?</h3>
          <p>
            Toothpaste contains fluoride which helps to fight plaque, polish
            teeth, reduce decay, and give a fresh breath. A good toothpaste
            fights acid attack when the acid is created by the bacteria present
            in the mouth.
          </p>
          <h3 className="fw-bold">Does incorrect brushing have negative effects?</h3>
          <p>
            Yes, there can be a number of problems such as tooth staining, gum
            bleeding and infection, receded gums (which make the teeth look big
            and expose the root), bad breath, wearing of teeth, and teeth
            sensitivity.
          </p>
        </section>

        {/* Section 5: Brush Replacement and Children Brushing */}
        <section className="mt-5">
          <h3 className="fw-bold">When should a brush be changed?</h3>
          <p>
            Normally, a brush needs replacement after every 3 months. Moreover,
            brushes should be changed after cold/flu. There are indicator brushes
            available in the market which have a blue color in the center; when
            this color fades, the brush should be changed.
          </p>
          <h3 className="fw-bold">Is brushing needed for children?</h3>
          <p>
            Children should start brushing from the time they have baby teeth.
            Parents should encourage their children to brush their teeth
            regularly. Children's teeth are prone to cavities, and brushing
            avoids this and maintains good oral hygiene.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Brushingtechniques;
