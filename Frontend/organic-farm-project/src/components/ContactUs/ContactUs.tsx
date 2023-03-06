//CSS
import "./ContactUs.css";

//Assets
import Instagram from "../../assets/contactus/instagram1.png";
import Facebook from "../../assets/contactus/facebook1.png";
import ProfileImage from "../../assets/contactus/rami-profile-image.png";
import Tiktok from "../../assets/contactus/tiktok.png";
import Whatsapp from "../../assets/contactus/whatsapp.png";
import { useState } from "react";
import LoginPopup from "./LoginPopup/LoginPopup";


function ContactUs(){

  const [loginPopup, setloginPopup] = useState({
    IsLoginPopup: false,
  });
  const closePopup = () => {
    setloginPopup({ IsLoginPopup: false});
  };

    return(
      <>
      {loginPopup.IsLoginPopup ? <LoginPopup closePopup={closePopup} /> : null}
      <div id="contactus">
      <section className="contactus-container">
      <h2 className="contactus-title"> Contact Us</h2>
     <div className="image-icons">
     <img className="profile-image" src={ProfileImage} alt="profileimage" />
     <h2 className="subtitle">Co-Founder: Ramy Bawadi</h2>
     <div className="contactus-socialmedia" >
      <div>
      <h3>
      Phone Number: 
      <a href="tel:+96171683605" className="links">+961 71 68 36 05 </a>
      </h3>
      <h3>
      Email:
      <a href="mailto:ramybawadi@gmail.com"  className="links">
      ramybawadi@gmail.com
      </a>
    </h3>
    </div>
    <div className="icons">
    <a href="https://wa.me/71683605">
      <img
        className="socialmedia-whats-icon"
        src={Whatsapp}
        alt="Whatsapp"
      />
    </a>
  
    <a href="https://www.facebook.com/Ramys-Ecological-Farm-117416577944367/">
      <img
        className="socialmedia-fb-icon"
        src={Facebook}
        alt="Facebook"
      />
    </a>
    <a href="https://www.tiktok.com/@ramysecologicalfarm?_t=8YRUq3WdAEE&_r=1">
      <img
        className="socialmedia-tik-icon"
        src={Tiktok}
        alt="Tiktok"
      />
    </a>
    <a href="https://instagram.com/ramysecologicalfarmofficial?igshid=YmMyMTA2M2Y=">
      <img
        className="socialmedia-insta-icon"
        src={Instagram}
        alt="Instagram"
      />
    </a>
    </div>
    </div>
  </div>
</section>

<button onClick={() => {
                setloginPopup({
                  IsLoginPopup: true,
                });
              }} className="login-button">Login</button>
</div>
</>
)
};
export default ContactUs;