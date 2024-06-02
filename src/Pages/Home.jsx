import "./Home.css";
import spenser from "../assets/spenser.jpg"
const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="heroTxt">
          <h2 className="herotxt1">tech is the future </h2>
          <p className="herotxt2">join us today</p>
        </div>
      </section>

      <section className="aboutUs">
        <div className="titleaboutus">
          <h2 className="aboutHead">about us</h2>
        </div>
        <div className="listcontainer">
          <div className="listItem">
            <div>
              <h2>our vision</h2>
              <p>to nature tech enthusist who will change the world</p>
            </div>
          </div>
          <div className="listItem">
            <div>
              <h2>our mission</h2>
              <p>to inspire technology growth in our nation </p>
            </div>
          </div>
          <div className="listItem">
            <div>
              <h2>our values</h2>
              <p>growth <br/>providence </p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
      <div className="reviewtitle">
        <h2>reviews from our members</h2>
      </div>
        <div className="reviewHeader">
        
          <div className="reviewitem">
          <h6>member</h6>
        <img src={spenser} alt=""/>
          <p>im johndi<br/>third year student<br/>ijoined this club in first year and i have been able to learn  a lot i am currently taking cybersecurity and the journey has been amazing</p>
        </div>

        <div className="reviewitem">
        <h6>member</h6>
        <img src={spenser} alt=""/>
          <p>im spenser<br/>fourth year student<br/>ijoined this club in first year and i have been able to learn  a lot i am currently taking cybersecurity and the journey has been amazing</p>
        </div>

        <div className="reviewitem">
        <h6>member</h6>
        <img src={spenser} alt=""/>
          <p> im brian<br/>second year student<br/>ijoined this club in first year and i have been able to learn  a lot i am currently taking cybersecurity and the journey has been amazing</p>
        </div>

        <div className="reviewitem">
        <h6>member</h6>
        <img src={spenser} alt=""/>
          <p>im jane<br/>third year student<br/>ijoined this club in first year and i have been able to learn  a lot i am currently taking cybersecurity and the journey has been amazing</p>
        </div>

        <div className="reviewitem">
        <h6>member</h6>
        <img src={spenser} alt=""/>
          <p>im steve<br/>first year student<br/>ijoined this club in earlier this year and i have been able to learn  a lot i am currently taking cybersecurity and the journey has been amazing</p>
        </div>

        </div>
      </section>
    </div>
  );
};
export default Home;
