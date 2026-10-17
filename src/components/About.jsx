import "../css/About.css";
import theme_pattern from "../assets/theme_pattern.svg";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I am experienced frontend Devloper with professional skills in
                the field and wants to become a{" "}
                <strong>Full Stack Developer</strong>. Throughout my College time, I have had the privilege
                of collaborating in many real-world projects, contributing to my
                success and growth.
              </p>
              <p>
                My passion for frontend devlopment is not only reflected in my
                extensive experience but also in the enthusiasm and dedication i
                bring to each project.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>Javascript</p>
                <hr style={{ width: "85%" }} />
                <span className="about-skill-level">85%</span>
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "80%" }} />
                <span className="about-skill-level">80%</span>
              </div>
              <div className="about-skill">
                <p>NodeJS</p>
                <hr style={{ width: "72%" }} />
                <span className="about-skill-level">72%</span>
              </div>
              <div className="about-skill">
                <p>ExpressJS</p>
                <hr style={{ width: "70%" }} />
                <span className="about-skill-level">70%</span>
              </div>
              <div className="about-skill">
                <p>MongoDB</p>
                <hr style={{ width: "60%" }} />
                <span className="about-skill-level">60%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>80+ </h1>
            <a href="https://www.oneroadmap.io/skills/node/certificate/CERT-0AF94E84">
              <p>scores frontend skills test</p>
            </a>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>Collaborating projects.</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>2+</h1>
            <p>Programming languages</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
