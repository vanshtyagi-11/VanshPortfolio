import "../css/Hero.css";
import profile from "../assets/profile2.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1KbAJQeOeUOkc6GNo7COTpmYufhZTiOkq/view?usp=drivesdk";

  const handleResumeClick = () => {
    window.open(resumeLink, "_blank");
  };

  return (
    <>
      <div id="hero" className="hero">
        <img src={profile} alt="" className="profile_img" />
        <h1>
          <span>I'm Vansh Tyagi,</span> frontend developer based in India.
        </h1>
        <p>
          I am a Web developer from Uttar Pradesh, India, skilled in JavaScript,
          React.js, Node.js, Express.js, and MongoDB.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
          <div className="hero-resume" onClick={handleResumeClick}>
            My Resume
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
