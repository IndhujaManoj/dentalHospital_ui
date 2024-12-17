import React from 'react'
import "./Oralandmaxillofacial.css"
import perdiatric from "../assets/pediatricdentistry.png"


const Pediatricdentistry = () => {
  return (
    <div>
        <div className="ortho-container my-5">
        {/* Header Section */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="ortho-title mb-4">Pediatric Dentistry</h1>
            <h3 className="ortho-subtitle">What is the meaning of pediatric dentistry?</h3>
            <p className="ortho-text">
            Pediatric dentistry specializes in/takes care of the oral health of infant, children and adolescent. This dentistry also treats children with special needs, who are physically and mentally challenged. Pediatric dentistry involves additional study of 3 years (i.e. after 4 years of dental training).This branch of dentistry studies child growth, psychology and development. Such dentists take care of wide variety of dental problems of children e.g. cavity, tooth decay, malocclusion, emergency care, crooked teeth etc.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={perdiatric}
              alt="Braces Treatment"
              className="ortho-image rounded shadow"
            />
          </div>
        </div>

        {/* Section 2: Who Are Orthodontists */}
        <section className="mt-5">
          <h3 className="ortho-subtitle">When should a child first visit the dentist?</h3>
          <p className="ortho-text">
          According to American Academy of Pediatric Dentistry the child should be brought to the dentist when he turns 1 year old .By that time the first teeth comes and the dentist can discuss ways of keeping oral hygiene. A dentist can guide the parents about diet, tooth eruption, finger habits, fluoride etc.
          </p>
          <h3 className="ortho-subtitle">How many visits are recommended?</h3>
          <p className="ortho-text">
          According to American Academy of Pediatric Dentistry the child should be brought twice a year to the dental clinic .The visits may vary if the child has tooth decay, bad oral hygiene, and unusual teeth growth.
          </p>
          <h3 className="ortho-subtitle">How important are baby teeth?</h3>
          <p className="ortho-text">
          They help the child to crew food, smile properly and speak clearly. Baby teeth hold the space for permanent teeth. If child looses teeth at an early age because of decay/ damage the nearby teeth can encroach that free space which can result in misplaced/crooked permanent teeth.
          </p>
          <h3 className="ortho-subtitle">How to clean baby teeth?</h3>
          <p className="ortho-text">
          For an infant a soft cloth should be used to clean his/her gums after every feed. Once the child has one tooth a soft tooth brush can be used.
          </p>
          <h3 className="ortho-subtitle">What is the right time to use a tooth paste?</h3>
          <p className="ortho-text">
          Once the child develops a few teeth, tooth paste can be used. Tooth paste with fluoride is not recommended for children below 2 years because children have a habit of swallowing paste and taking in excess of fluoride can cause staining of teeth .Parents should brush the teeth of their children till the time they do that independently. Children should rinse their mouth thoroughly after brushing.
          </p>
          <h3 className="ortho-subtitle">What is a cavity?</h3>
          <p className="ortho-text">
          There are bacteria present in the mouth, when they come in contact with sweet food left in the mouth, they form acids. These acids attack the enamel and create a hole in the teeth which results in severe pain. Children eat sweets, chocolates and do not clean their teeth properly which results in cavity formation.
          </p>
          <h3 className="ortho-subtitle">What are dental sealants?</h3>
          <p className="ortho-text">
          Sealants are the best way to avoid cavities. They cover the fissures and pits in the teeth .Sealants are susceptible to decays and are very difficult to brush off. Sealants are very effective and safe for children teeth, especially molars.          </p>
          <h3 className="ortho-subtitle">Does sucking thumb cause any problem in the teeth?</h3>
          <p className="ortho-text">
          The child should stop sucking thumb before the eruption of permanent teeth. If this habit continues there will be problems such as buckteeth/open bite.
          </p>
          <h3 className="ortho-subtitle">What are positive dental habits?</h3>
          <p className="ortho-text">
          Keeping good oral hygiene is a family effort. The children should know the importance of brushing (twice a day) and flossing daily. Moreover regular dental checkups are also necessary for good oral health.
          </p>
        </section>

        </div>
    </div>
  )
}

export default Pediatricdentistry
