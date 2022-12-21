import "./MainTopSection.css";

 function MainTopSection(){
    return(
    <>
      <video autoPlay loop muted className="video-style">
        <source src={require('../../assets/video2.mp4')} type='video/mp4' />
      </video>
      <h1 className="title-on-video">Ramy's Ecological Farm</h1>
     </>
      
  );
}
export default MainTopSection;


