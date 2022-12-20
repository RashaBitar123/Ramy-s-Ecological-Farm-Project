//CSS
import "./MainTopSection.css";

//Assets
import TopImage from "../../assets/Rami-Eco-Farm-Top-Image.jpg";

function MainTopSection() {
  return (
    <div>
      <img className="top-image" src={TopImage} alt="Top Image" />
    </div>
  );
}

export default MainTopSection;
