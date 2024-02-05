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
            <span>Hello! </span>I am <span>Diego</span>
          </h2>
        </div>
        <div className="hero-bottom">
          <div className="typer-text">
            <TypedText />
            <br />
            <h5>From <span>Gt</span></h5>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/diegoamonzong" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/dmonzon4" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/dmon.nz" target="_blank"><FaInstagram /></a>
            <a href="https://www.facebook.com/diegoalejandro.monzon/" target="_blank"><FaFacebook /></a>
            <a href="https://www.credential.net/eb07ccaa-2521-4a7a-8484-3662cf7bf783#gs.41p2p8" target="_blank"><GrCertificate /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
