import "./Banner.scss";
import BannerImg from "../../../assets/img/banner-new1.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
          Why wait? Treat yourself to the best in snacks and munchies, 
          all at unbeatable prices. Shop now and satisfy your cravings effortlessly, 
          only at VIT SastaMart.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Show Now</div>
          </div>
        </div>

        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
