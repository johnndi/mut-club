import "./Leadershp.css";
import chair from "../assets/chair.jpeg"
import carol from "../assets/carol.jpeg"
import web from "../assets/web.jpeg"
import manase from "../assets/manase.jpeg"
import stan from "../assets/stan.jpeg"
import paul from "../assets/paul.jpeg"
import evyonne from "../assets/evyonne.jpeg"
import hero from "../assets/hero.jpeg"
import tresurer from "../assets/tresurer.jpeg"
import vicechair from "../assets/vicechair.jpeg"
import secritary from "../assets/secritary.jpeg"
const Leadership = () => {
  return (
    <div>
      <section className="lead">
        <div className="pagetitle">
          <h2 className="LEADERS">our leadership</h2>
        </div>
        <div className="container">
          <div className="leader">
            <div >
              <h2>our patron</h2>
              <div className="image">
                <img src={hero} alt="patron" />
              </div>
              <p>name:john ndia<br/> facebook:<a href="meta.com">john_ndia</a><br/> ig:<a href= "instagram.com">john_ndia</a></p>
            </div>
          </div>
          <div className="leader">
          <h2>our CHAIRPERSON</h2>

              <div className="image">
                <img src={chair} alt="chaiperson" />
              </div>
            <div>
              
              <p>name: victory njeri<br/>facebook:<a href="meta.com">victory_njeri</a><br/>ig:<a href="instagram.com">victory_njeri</a> </p>
            </div>
          </div>
          <div className="leader">
          <h2>vice chairperson</h2>
          <div className="image">
                <img src={vicechair} alt="vicechair" />
              </div>
            <div>
              <p>name:allan muhari<br/>facebook:<a href="meta.com">allan_muhari</a><br/> ig:<a href="instagram.com">allan_muhari</a> </p>
            </div>
          </div>

          <div className="leader">
            <h2>secritary</h2>
            <div className="image">
              <img src={secritary} alt="secritary" />
            </div>
            <p>name:bridget gitonga<br/> facebook:<a href="meta.com">bridget_gitonga</a> ig:<a href="instagram.com">bridget_gitonga</a></p>
          </div>

          <div className="leader">
            <h2>tresurer</h2>
            <div className="image">
              <img src={tresurer} alt="tresurer" />
            </div>
            <p>name:ruth mutisya<br/> facebook:<a href="meta.com">ruth_mutisya</a> ig:<a href="instagram.com">ruth_mutisya</a></p>
          </div>

          <div className="leader">
            <h2>cybersecurity lead</h2>
            <div className="image">
              <img src={web} alt="cybersecurity lead" />
            </div>
            <p>name:webster ifedha <br/>facebook:<a href="meta.com">webster_ifedha</a><br/>ig:<a href="meta.com">webster_ifedha</a></p>
          </div>

          <div className="leader">
            <h2>ui/ux lead</h2>
            <div className="image">
              <img src={manase} alt="ui/ux lead" />
            </div>
            <p>name:manase gunga facebook:<a href="meta.com">manase_gunga</a> ig:<a href="meta.com">manase_gunga</a></p>
          </div>

          <div className="leader">
            <h2>web development lead</h2>
            <div className="image">
              <img src={carol} alt="web development lead" />
            </div>
            <p>name:carolyne githenduka facebook:<a href="meta.com">carolyne_githenduka</a> ig:<a href="meta.com">carolyne_githenduka</a></p>
          </div>

          <div className="leader">
            <h2>mobile app development lead</h2>
            <div className="image">
              <img src={stan} alt="mobile app develoment lead" />
            </div>
            <p>name:stanley amuze <br/>facebook:<a href="meta.com">stanley_amuze</a><br/> ig:<a href="instagram.com">stanley_amuze</a></p>
          </div>

          <div className="leader">
            <h2>cloud engineering lead</h2>
            <div className="image">
              <img src={paul} alt="cloud engineering lead" />
            </div>
            <p>name:paul_karanja <br/>facebook:<a href="meta.com">paul_karanja</a> <br/> ig:<a href="instagram.com">paul_karanja</a></p>
          </div>

          <div className="leader">
            <h2>power platform</h2>
            <div className="image">
              <img src={evyonne} alt="power platform" />
            </div>
            <p>name:Evyonn mbithe <br/> facebook:<a href="meta.com">Evyonn_mbithe</a> <br/>ig:<a href="meta.com">Evyonn_mbithe</a></p>
          </div>

          
          
        </div>
      </section>
    </div>
  );
};
export default Leadership;
