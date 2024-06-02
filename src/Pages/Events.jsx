import "./Events.css"
import cybersecurity from "../assets/cybericon.jpeg"
import uiux from "../assets/uiux.png"
import web_development from "../assets/web dev icon.jpeg"
import mobile_app_development from "../assets/mobiledev icon.jpeg"
import power_platform from "../assets/powerplatform icon.jpeg"
import cloud_engineering from "../assets/cloud engineericon.jpeg"
const Events  = () => {
  return (
    <div>
    <section className="events">
      <div className="eventtitle">
        <h2>our events</h2>
      </div>
      <div className="eventcontainer">
        <div className="event">
        <h2>mondays</h2>
        <div className="image">
              <img src={cybersecurity} alt="cybersecurity" />
            </div>
          <div className="exp">
            <h3>cybersecurity</h3>
            <p>instructor:webster ifedha<br/>time:4pm to 7pm<br/>venue:computer lab F04</p>

          </div>
        </div>
        <div className="event">
        <h2 className="day">tuesdays</h2>
        <div className="image">
        <img src={uiux} alt="manese"/>
            
          </div>
          <div>
           <h3>ui/ux design</h3>
            <p>instructor:manase gunga</p>
            <p>time:5pm to 8pm </p>
            <p>venue:computer lab F04 </p>
          </div>
        </div>

        <div className="event">
        <h2 className="day">wednesday</h2>
        <div className="image">
            <img src={web_development} alt="carol" />
          </div>
          <div>
          <h3>web development</h3>
            <p>instructor:carolyne githenduka </p>
            <p> time:6pm to 9pm</p>
            <p>venue:computer lab F04 </p>
            
          </div>
        </div>

        <div className="event">
          <h2 className="day">thursday</h2>
          <div className="image">
            <img src={mobile_app_development} alt="stanley amuze"/>
          </div>
          <h3>mobile apps development</h3>
          <p>instructor:stanley amuze </p>
          <p>time:4pm - 7pm</p>
          <p>venue:computer lab F04 </p>
        </div>

        <div className="event">
          <h2 className="day">friday</h2>
          <div className="image">
            <img src={cloud_engineering} alt="paul karanja" />
          </div>
          <h3>cloud engineering</h3>
          <p>instructor:paul karanja </p>
          <p>time:3pm-6pm </p>
          <p>venue:computer lab F04 </p>
        </div>

        <div className="event">
          <h2 className="day">saturday</h2>
          <div className="image">
            <img src={power_platform} alt="" />
          </div>
          <h3>power platform</h3> 
          <p>instructor:Evyonn Mbithe </p>
          <p>venue:computer lab F04 </p>
          <p>time:1pm to 4pm</p>
        </div>
      </div>
    </section>
  </div>
    
  );
};
export default Events;