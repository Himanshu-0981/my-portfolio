import "../../styles/HeroImageBlob.css";
import mainImg from "../assets/main_img.png";

function HeroImage({ cssStyle }) {
  return (
    <>
      <div className="wrapper">
        <div className={`item ${cssStyle}`}>
          <img src={mainImg} alt="main img" loading="lazy" />
        </div>
      </div>
    </>
  );
}

export default HeroImage;
