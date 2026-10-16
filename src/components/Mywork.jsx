import "../css/Mywork.css";
import theme_pattern from "../assets/theme_pattern.svg";
import arrow_icon from "../assets/arrow_icon.svg";
import mywork_data from "../assets/mywork_data";

function Mywork() {
  return (
    <>
      <div id="mywork" className="mywork">
        <div className="mywork-title">
          <h1>My latest work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((Worker, index) => {
            return (
              <div>
                <img key={index} src={Worker.w_img} alt="" />
                <h4>{Worker.w_name}</h4>
              </div>
            );
          })}
        </div>
        {/* <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div> */}
      </div>
    </>
  );
}
export default Mywork;
