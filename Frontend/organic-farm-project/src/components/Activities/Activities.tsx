import "./Activities.css";

import activities from '../../activities.json';

function Activities() {

 return(
    <>
  
    <div id="activities">
    <h1 className="activities-title">Activities</h1>
    <div className="item-container">
    {activities.map((activity) => (
    <div className="card" key={activity.id}>     
    <img className="img" src={activity.image} alt="Card image cap" />
    <h3>{activity.title}</h3>
    <p>{activity.description}</p>
    </div>   
    ))}
    </div>   
    </div>      
   </>
 );
    };
           
export default Activities;