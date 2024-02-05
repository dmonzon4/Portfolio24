// ****************importing icons********************
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

// importing Conatct png ****************************
import contactImage from "../assets/contact.png"

export default function Contact() {
  return (
    <section id="Contact">
      <div className="container contact-container">
        <div className="contact-left">
          <h4>Contact</h4>
          <p>
          I am actively seeking to become part of a collaborative, cross-functional team <br /> that prioritizes enhancing the quality of people's lives through accessible programming. <br /> Do you have an ongoing project where my skills could contribute positively? Let's start a conversation!
          </p>
          <h5>
            <a href="mailto:diego.almg@hotmail.com">diego.almg@hotmail.com</a>
          </h5>
          {/* <p>+123456789</p> */}
          <p>Munich, Germany</p>

          <div className="social">
          <a href="https://www.linkedin.com/in/diegoamonzong" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/dmonzon4" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/dmon.nz" target="_blank"><FaInstagram /></a>
            <a href="https://www.facebook.com/diegoalejandro.monzon/" target="_blank"><FaFacebook /></a>
            <a href="https://www.credential.net/eb07ccaa-2521-4a7a-8484-3662cf7bf783#gs.41p2p8" target="_blank"><GrCertificate /></a>
          </div>
        </div>
        <div className="contact-right">
          <img src={contactImage} alt="contact" />
        </div>
      </div>
    </section>
  );
}
