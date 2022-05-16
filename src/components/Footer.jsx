import "./footer.scss";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from 'react-icons/ai';
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://instagram.com/d.nothdurft" target={"blank"}>
          <BsInstagram className="social" />
        </a>
        <a href="https://facebook.com/dannynothd" target={"blank"}>
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://www.youtube.com/channel/UCyCb3FwIbizxHKRD-cpBR1g" target={"blank"}>
          <TiSocialYoutube className="social" />
        </a>
        <a href="https://www.linkedin.com/in/danny-nothdurft-4b2434239/" target={"blank"}>
          <AiFillLinkedin className="social" />
        </a>
        <a href="https://github.com/DannyNothdurft" target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;