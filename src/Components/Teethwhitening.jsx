import React from 'react'
import Teethwhitenimg from "../assets/teethwhitening.png"
import "./Oralandmaxillofacial.css"

const Teethwhitening = () => {
    return (
        <div>
            <div className="container my-5">
                {/* Header Section */}
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h1 className="display-5 fw-bold mb-4" style={{ color: "#00a3ff" }}>
                            Teeth Whitening
                        </h1>
                        <h3 className="fw-bold">What is teeth whitening?</h3>
                        <p>
                            Teeth whitening is a process of removing stains that stick on to the enamel, it is bleaching process used to get rid of the discoloration of the teeth. There are different ways of teeth whitening, some people go for bleaching sessions at the dental clinic, some buy over –the –counter products and very few people go for cosmetic treatment. Teeth whitening treatment is not permanent, though the results are effective and noticeable. It requires a lot of care and oral hygiene.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img
                            src={Teethwhitenimg}
                            alt="Maxillofacial Surgery"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>

                {/* Section 2: Oral Treatment */}
                <section className="mt-5">
                    <h3 className="fw-bold">What are tooth stains?</h3>
                    <p>
                        There are 2 types of staining of teeth: extrinsic and intrinsic staining.
                    </p>
                    <ul className="custom-list">
                        <li>
                            <span style={{color:"#00a3ff",fontSize:"bold"}}>Extrinsic stains </span>appear on the teeth surface .The main reason for this is exposure/drinking dark-colored beverages, tobacco, food and routine wearing of teeth. Minor stains can be removed while brushing .Some stains are stubborn and require teeth bleaching. Persistent stains penetrate deep inside the teeth and require special efforts to get removed and if proper attention is not paid such stains can become permanent.
                        </li>
                        <li>
                        <span style={{color:"#00a3ff",fontSize:"bold"}}>Intrinsic stains </span> appear inside the teeth. Such stains result from aging, trauma, exposure to minerals at the time of tooth formation /excessive intake of fluoride through injection. Earlier it was believed that intrinsic stains could not be removed by bleaching, but now cosmetic dentistry has changed this thinking and doctors believe that deep stains in the teeth can also be removed with the help of take home teeth whitening and regular supervision of the dentist.
                        </li>
                    </ul>
                    <h3 className="fw-bold">What results in stains?</h3>
                    <p>
                    Various factors cause stains such as:-
                    </p>
                    <ul className="custom-list">
                        <li>
                        AGE- The color of the teeth depends upon the age, as one grows older the color of the teeth becomes darker and the stains become stubborn e.g. Teeth whitening will show dramatic results for teenagers but the results change at the age of 50 because the stains become stubborn.
                        </li>
                        <li>
                        Eating habits-consumption of red wine, tea, coffee, carrot, colas, oranges and deep colored beverages causes staining of teeth over year’s .Moreover citrus fruits as well as vinegar results in erosion of the enamel.
                        </li>
                        <li>
                        Smoking habits results in intrinsic stains.
                        </li>
                        <li>
                        Consumption of drugs/chemicals at the time of tooth formation results in formation of a grey line which is hard to remove.
                        </li>
                        <li>
                        Grinding of teeth results in micro cracking of teeth by which the tooth edges become dark.
                        </li>
                    </ul>
                    <h3 className="fw-bold">What are the teeth whitening options available?</h3>
                    <p>
                    There are 3 main whitening options:-
                    </p>
                    <h3 className="fw-bold">In-Office</h3>
                    <p>
                    Such type of whitening gives significant results in very less time. High concentration of peroxide gel is used on teeth after the gums are protected with applying paint on a rubber dam. Stubborn stains may require one more session.
                    </p>
                    <h3 className="fw-bold">Take-Home Whitening Kits</h3>
                    <p>
                    Such professional kits use lower concentration of peroxide gel, but gives great results after a long time. The gel is applied with the help of custom made trays (bleaching trays) that look like mouth guards.
                    </p>
                    <h3 className="fw-bold">Over-the-Counter</h3>
                    <p>
                    Dental veneers require a number of visits. In the first visit the patient consults the dentist, wherein the dentist examines the teeth, discusses the entire procedure to be performed as well as estimates the cost of the whole process. In the second visit tooth preparation is done .The dentist numbs the teeth which has to be reduced. After teeth is prepared an impression is taken with the help of dental wax/ putty. The impression/mould is sent to the laboratory where the veneer is created.After2/3 weeks the veneer is prepared and then it is bonded to the teeth (after proper cleaning of the teeth) with the help of a special light that activates the cement. Lastly the dentist will polish the teeth.
                    </p>
                    <h3 className="fw-bold">How to take care once a veneer is placed?</h3>
                    <p>
                    This is the cheapest & convenient way of teeth whitening as it involves buying of whitening kit from the store. This kit has a bleaching gel, which is applied with the help of whitening strips, paints applied on applicators, trays. This method may only whiten the front teeth and not the entire smile.
                    </p>
                    <h3 className="fw-bold">What are the risks involved?</h3>
                    <ul className="custom-list">
                        <li>
                        Bleaching can result in temporary sensitivity in the teeth to hot/cold, touch and pressure.
                        </li>
                        <li>
                        Gum irritation is a common feature and it tends to last for say a week.
                        </li>
                        <li>
                        Bonding, crowns, veneers and restoration are not affected by bleaching and these results in Technicolor teeth.
                        </li>
                    </ul>



                </section>

                
            </div>

        </div>
    )
}

export default Teethwhitening
