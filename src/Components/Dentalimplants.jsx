import React from 'react';
import "./Oralandmaxillofacial.css";
import dentalimplantsimg from "../assets/dentalimplants.png";

const Dentalimplants = () => { 
  return (
    <div>
      <div className="container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4" style={{ color: "#00a3ff" }}>
              Dental Implants
            </h1>
            <h3 className="fw-bold">What is the meaning of dental implant?</h3>
            <p>
              A dental implant is a manmade replacement in place of the natural teeth which enables a person to have fixed teeth. Dental implants are different from transplants taken from others. What category of dental transplant is suitable for a patient depends on the individual need and condition of the teeth. An x-ray is required to check the number of bones remaining and the space available in the mouth. The dentist performs an examination before finalizing which type of implant should be done.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={dentalimplantsimg}
              alt="Dental Implants"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Section 2: Candidates */}
        <section className="mt-5">
          <h3 className="fw-bold">Who are the candidates for dental implant?</h3>
          <p>
            People who are missing teeth, whether it be one or all, are candidates for an implant. If a person is missing one or a few teeth, then dental implants along with a crown/bridge can be used to replace the missing teeth. These manmade teeth function as well as natural teeth, and there is no further loss of bones and decay. If a person is missing all teeth, then an implant is used to anchor loose dentures. In some cases, when bones are lost, bones can be regenerated with the technique of bone expansion, which further helps in implants.
          </p>
        </section>

        {/* Section 3: Cost */}
        <section className="mt-5">
          <h3 className="fw-bold">How much does an implant cost?</h3>
          <p>
            The cost can be determined after a thorough examination and recording of the individual case. Moreover, the personal skill of the dentist, location of the clinic, and individual requirements determine the cost of an implant.
          </p>
        </section>

        {/* Section 4: Time Required */}
        <section className="mt-5">
          <h3 className="fw-bold">How much time is required?</h3>
          <p>
            Dental implant is an advanced procedure, hence it takes time of 4-9 months or even more, depending upon the individual case. The dentist provides temporary teeth during this period, and the patient is never without teeth.
          </p>
        </section>

        {/* Section 5: Pain and Rejection */}
        <section className="mt-5">
          <h3 className="fw-bold">Is the treatment painful?</h3>
          <p>
            There is a little discomfort at the time of the procedure, but patient sedation and anesthesia are used to reduce the discomfort. Most patients experience pain for 2-3 days after the implant/surgery. Dentists also provide medicines to reduce the pain and avoid any type of discomfort.
          </p>
          <h3 className="fw-bold">Are there any chances of rejection?</h3>
          <p>
            The body can reject soft tissue transplants (e.g., kidney, lung, heart transplants), but there is no rejection of dental implants by the body. There are chances of failure because of factors such as lack of focus on the implant, some other condition, misalignment, or diseases the patient suffers from. Dental implants use titanium material that is biocompatible, i.e., it is compatible with the tissues of the body. Titanium is widely used nowadays to replace parts of the body.
          </p>
        </section>

        {/* Section 6: Post-Procedure Care */}
        <section className="mt-5">
          <h3 className="fw-bold">When can I resume work?</h3>
          <p>
            The patient experiences discomfort and swelling on the day of surgery as well as the day after the surgery. The patient is advised not to do any strenuous exercise. The decision to resume work depends on the individual.
          </p>

          <h3 className="fw-bold">What side effects does one face without a dental implant?</h3>
          <p>
            When a person loses teeth, the bones of the teeth also become weak and, after some time, these bones disappear. Other problems emerge, such as:
          </p>
          <ul>
            <li>The adjacent teeth become weak, and there is no support for partials, dentures, and bridges, resulting in pain, mobile tissues of the gum, sore spots, painful ridges, and lack of retention.</li>
            <li>The tongue also enlarges as it accommodates the space of missing teeth.</li>
            <li>The diet changes, and one has to survive on soft food.</li>
            <li>Bone loss results in numbness of the lower lips, and there are chances of jaw fracture.</li>
            <li>Bone loss makes the adjacent bones weak, causing the nearby teeth to fall out.</li>
          </ul>
          <p>
            Hence, one should start the treatment at an early stage because the problem becomes more severe if the treatment is delayed.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Dentalimplants;
