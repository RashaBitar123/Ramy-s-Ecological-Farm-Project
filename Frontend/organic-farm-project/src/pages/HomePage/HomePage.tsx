//CSS
import "./HomePage.css";
//Components
import Activities from "../../components/Activities/Activities";
import ContactUs from "../../components/ContactUs/ContactUs";
import Mission from "../../components/Mission/Mission";
import Philosophy from "../../components/Philosophy/Philosophy";
import Story from "../../components/Story/Story";
import MainTopSection from "../../components/MainTopSection/MainTopSection";
import MenuList from "../../components/MenuList/MenuList";

function HomePage(){
    return (
    <div>
    <MainTopSection/>
    <MenuList />
    <Mission />
    <Philosophy />
    <Activities />
    <Story />
    <ContactUs />
  </div>
    )
};

export default HomePage;