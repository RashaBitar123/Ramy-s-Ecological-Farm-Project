import React, { useState } from 'react';

//CSS
import "./MainTopSection.css";

//SlideShow
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

//Assets
import Image1 from "../../assets/maintopsection/slideshow-image1.jpeg";
import Image2 from "../../assets/maintopsection/slideshow-image2.jpeg";
import Image3 from "../../assets/maintopsection/slideshow-image3.jpeg";
import Image4 from "../../assets/maintopsection/slideshow-image4.jpeg";
import Image5 from "../../assets/maintopsection/slideshow-image5.jpeg";
import Image6 from "../../assets/maintopsection/slideshow-image6.jpeg";
import Image7 from "../../assets/maintopsection/slideshow-image7.jpeg";
import Image8 from "../../assets/maintopsection/slideshow-image8.jpeg";
import Image9 from "../../assets/maintopsection/slideshow-image9.jpeg";
import Image10 from "../../assets/maintopsection/slideshow-image10.jpeg";
import Image11 from "../../assets/maintopsection/slideshow-image11.jpeg";
import Image12 from "../../assets/maintopsection/slideshow-image12.jpeg";
import Image13 from "../../assets/maintopsection/slideshow-image13.jpeg";
import Image14 from "../../assets/maintopsection/slideshow-image14.jpeg";
import Image15 from "../../assets/maintopsection/slideshow-image15.jpeg";
import Image16 from "../../assets/maintopsection/slideshow-image16.jpeg";
import Image17 from "../../assets/maintopsection/slideshow-image17.jpeg";
import Image18 from "../../assets/maintopsection/slideshow-image18.jpeg";
import Image19 from "../../assets/maintopsection/slideshow-image19.jpeg";
import Image20 from "../../assets/maintopsection/slideshow-image20.jpeg";
import Image21 from "../../assets/maintopsection/slideshow-image21.jpeg";
import Image22 from "../../assets/maintopsection/slideshow-image22.jpeg";
import Image23 from "../../assets/maintopsection/slideshow-image23.jpeg";
import Image24 from "../../assets/maintopsection/slideshow-image24.jpeg";
import Image25 from "../../assets/maintopsection/slideshow-image25.jpeg";
import MainImage from "../../assets/maintopsection/MainImage.jpeg";
import Logo from "../../assets/maintopsection/Rami-Eco-Farm-Logo.png";


 function  MainTopSection(){
 

 
  return (
    <>
    <div className="maintopsection-container" id="maintop">
      <img className="mainimage" src={MainImage} alt="" /> 
      <img className="logo" src={Logo} alt="" /> 
      <p className="title"> Ramy's Ecological Farm</p>

  
     
      <Carousel className="slideshow-image">
       <Carousel.Item>
          <img className="image" src={Image1} alt="First slide" />
        </Carousel.Item> 
        <Carousel.Item>
          <img className="image" src={Image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image3} alt="Third slide" />
        </Carousel.Item>
       <Carousel.Item>
          <img className="image" src={Image4} alt="Third slide" />
        </Carousel.Item> 
       <Carousel.Item>
          <img className="image" src={Image5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image7} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image8} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image9} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image10} alt="Third slide" />
        </Carousel.Item>
       <Carousel.Item>
          <img className="image" src={Image11} alt="Third slide" />
        </Carousel.Item> 
        <Carousel.Item>
          <img className="image" src={Image12} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image13} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image14} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image15} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image16} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image17} alt="Third slide" />
        </Carousel.Item>
       <Carousel.Item>
          <img className="image" src={Image18} alt="Third slide" />
        </Carousel.Item> 
        <Carousel.Item>
          <img className="image" src={Image19} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image20} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image21} alt="Third slide" />
        </Carousel.Item>
       {/* <Carousel.Item>
          <img className="image" src={Image22} alt="Third slide" />
        </Carousel.Item>  */}
        <Carousel.Item>
          <img className="image" src={Image23} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image24} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Image25} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      </div> 
   
    </> 
 
  );
}

export default MainTopSection;