//CSS
import "./Header.css";
import TopImage from "../../assets/Rami-Eco-Farm-Top-Image.jpg";
import Logo from "../../assets/Rami-Eco-Farm-Logo.png";
function Header() {
  return (
    <div className="header-container">
      <section>
     <img className="top-image" src={TopImage} alt="Top Image"/>
     <div className="header-title">Ramy's Ecological Farm</div>
     <img className="logo" src={Logo} alt="Logo"/>
     </section>
    </div>
  );
}

export default Header;
