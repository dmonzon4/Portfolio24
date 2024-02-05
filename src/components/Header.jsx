// ****************importing icons********************
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

// ****************importing UI********************
import TypedText from "../UI/TypedText";
// ****************importing Hero Image********************
import HeroImage from "../assets/batter.png";

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="hero">
          <img src={HeroImage} alt="" />
          <h2 className="hero-text">
            Hello! I am <span>Diego</span>
          </h2>
        </div>
        <div className="hero-bottom">
          <div className="typer-text">
            <TypedText />
            <br />
            <h5>From <span>In</span></h5>
          </div>
          <div className="social">
            <a href="" target="_blanck"><FaLinkedin /></a>
            <a href="" target="_blanck"><FaGithub /></a>
            <a href="" target="_blanck"><FaInstagram /></a>
            <a href="" target="_blanck"><FaFacebook /></a>
            <a href="" target="_blanck"><GrCertificate /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
