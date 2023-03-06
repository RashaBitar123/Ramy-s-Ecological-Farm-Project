//CSS
import "./Mission.css";
//Assets
import Image from "../../assets/mission/mission-image.jpeg";

function Mission (){
    return(
      <div id="mission" >
        <section className="mission-container" >
        <h1 className="mission-title"> Mission</h1>
        <div className="mission-item">
        <img className="mission-image1" src={Image} alt="" />
        <div className="mission-description">
         The main mission of this Ecological farm is to protects and preserves the ecological diversity of the land in order to ensure its educational value that will be maintained through perpetuity. In fact, we focus on increasing awareness and appreciation of the natural systems through education and research that will positively affect the production of the farm. This process is done by optimizing the use of natural sources, enhancing the biological processes in the soil and improving biomass, nutrient, carbon and water cycles, which allows the producers to reduce external inputs and costs. Also, it avoids the soil loss from wind and water erosion that typifies many agricultural regions given over to industrial farming.
        </div>
      </div>
      </section>
      </div>
    )
}

export default Mission;