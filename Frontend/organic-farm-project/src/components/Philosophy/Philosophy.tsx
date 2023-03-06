//CSS
import "./Philosophy.css";
//Assets
import Image from "../../assets/philosophy/philosophy-image.jpeg";


function Philosophy(){
    return(
      <section className="philosophy-container" id="philosophy">
      <h1 className="philosophy-title">Philosophy</h1>
      <div className="philosophy-item">
      <img className="philosophy-image1" src={Image} alt="" />
      <p className="philosophy-description">
      Ecological farming is a new policy that stabilizes human food production, preserves wild habitats, and protects the bees. We work on eliminating farmland chemicals, promoting biological diversity in farm lands and restoring bee populations. We also focus on attracting insects and natural creatures instead of repeling them, in a way of sustaining and balancing existing ecosystems. Ecological agriculture improves pollination, which in turn improves crop yields. Meanwhile, it takes advantage of the natural ecosystem services, such as water filtration, pollination, oxygen production, and pest control. Most ecological farming methods harken back to the days of the small family farm where many different crops were grown, such as wetlands and field margins. In fact, ecological farming is the way most farming has been done throughout human history.
      </p>
      </div>
    </section>
   
    )
}
export default Philosophy;