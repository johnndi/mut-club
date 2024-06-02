/* eslint-disable react/no-unescaped-entities */
import "./Track.css";
import cybericon from "../assets/cybericon.jpeg"
import uiux from "../assets/uiux.png"
import webdevicon from "../assets/web dev icon.jpeg"
import mobiledevicon from "../assets/mobiledev icon.jpeg"
import cloudengineericon from "../assets/cloud engineericon.jpeg"
import powerplatform from "../assets/powerplatform icon.jpeg"
const Track = () => {
  return (
    <div>
    <section className="track">
      <div className="trackpagetitle">
        <h2 >OUR TRACK</h2>
        </div>
      <div className="trackcontainer">

        <div className="trackitem">
          <h2>cybersecurity</h2>
          <div className="image">
            <img src={cybericon} alt="cyber icon" />
            
          </div>
          <div className="explain">
            <p>By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures</p>
            <a href="#form" className="about-cta">register→</a>
          </div>
          
        </div>

        <div className="trackitem">
          <h2>ui/ux</h2>
          <div className="img">
            <img src={uiux} alt="ui/ux icon" />
          </div>
          <div className="explain">
            <p>By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications</p>
            <a href="#form" className="about-cta">register→</a>
          </div>
        </div>

        <div className="trackitem">
          <h2>web development</h2>
          <div className="img">
            <img src={webdevicon} alt="web development icon" />
          </div>
          <div className="explain">
            <p>students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable website</p>
            <a href="#form" className="about-cta">register→</a>
          </div>
        </div>

        <div className="trackitem">
          <h2>mobile app development</h2>
          <div className="img">
            <img src={mobiledevicon} alt="mobile development icon" />
          </div>
          <div className="explain">
            <p> students will be adept at building, testing, and deploying mobile apps,  delivering engaging and high-performance solutions for smartphones.  <a href="#form" className="about-cta">register→</a></p>

          </div>
        </div>

        <div className="trackitem">
          <h2>cloud engineering</h2>
          <div className="img">
            <img src={cloudengineericon} alt=" cloud engineering icon" />
          </div>
          <div className="explain">
          <p>By the end of the track, students will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions.</p>
          <a href="#form" className="about-cta">register→</a>
          </div>
          
        </div>

        <div className="trackitem">
          <h2>power platform</h2>
          <div className="img">
            <img src={powerplatform} alt="power platform icons" />
          </div>
          <div className="explain">
            <p> Power Platform track will explore the capabilities of Microsoft's Power Platform: Power BI, Power Apps, Power Automate, and Power Virtual Agent</p>
            <a href="#form" className="about-cta">register→</a>
          </div>
        </div>

        </div>
        <section className="form" id="form">
          <div className="registerform">
            <form>
            <div className="formtitle">
                <h3>register</h3>
            </div>
            <div className="register">
              <label htmlFor="name">full name </label>
              <input
                type="text"
                id="name"
                className="register"
                placeholder="full name"
              />
            </div>
            <div className="register">
              <label htmlFor="year">year of study :</label>
              <input
                id="year of study"
                placeholder="year of study"
                className="register"
              />
            </div>
            <div className="register">
              <label htmlFor="course of study">course of study :</label>
              <input
                id="course of study"
                placeholder="course of study"
                className="register"
              />
              </div>
              <div className="register">
              <label htmlFor="track">choose a track :</label>
              <select
              name="track"
                id="track"
                placeholder="track"
                className="register"
              >
                <option value ="cybersecurity">cybersecurity
                </option>
                <option value ="uiux">ui/ux
                </option>
                <option value ="web_development">web development
                </option>
                <option value ="mobile_app_development">mobile_app_development
                </option>
                <option value ="cloud_engineering">cloud engineering
                </option>
                <option value ="power_platform">power platform
                </option>

              </select>

              </div>
            <button className="submit-btn">submit</button>
          </form>

           
        </div>
        </section>
    </section>
  </div>
  );
};
export default Track;
