//CSS
import "./HomePage.css";

//Assets
import Image1 from "../../assets/mission1-image.jpeg";
import Image2 from "../../assets/mission2-image.jpeg";

function HomePage(){
    return (
    <div className="Homepage-container">
    <section className="mission-container">
    <h1 className="mission-title"> Mission</h1>
    <div className="mission-item">
      <img className="mission-image1" src={Image1} alt="" />
      <img className="mission-image2" src={Image2} alt="" />
      
      <p className="mission-description">
        The main mission of this Organic farm is to protect and preserve the
        ecological diversity of the land in order to ensure its educational
        value that will be maintained through perpetuity.Our main purpose is
        to increase awareness and appreciation of the natural systems
        through education and research Ramy's ecological farm focus on
        natural ecosystems. They work on the interactions between plants,
        animals, soil organisms, taking into consideration protecting people
        and environment. Ramy's ecological farm improve awarness and
        understanding of the natural systems of the natural system based on
        the education and research. This process is done by optimizing the
        use of natural sources, enhancing the biological processes in the
        soil and improving biomass, nutrient, carbon and water cycles, which
        allows the producers to reduce external inputs and costs, in
        addition to the health/environment improvement.
      </p>
      </div>
    </section>

    <section className="philosophy-container">
    <h1 className="philosophy-title">Philosophy</h1>
    <div className="philosophy-item">
      <img className="philosophy-image1" src={Image1} alt="" />
      <img className="philosophy-image2" src={Image2} alt="" />
      
      <p className="philosophy-description">
      Ramy care for farm and farmers by offering innovative ecological solutions according to he farmer's aspirations.

      </p>
      </div>
    </section>
  </div>
    )
};

export default HomePage;