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
            I am currently looking to join a cross-functional team that values
            improving people's lifes <br />
            through accesible design. Do you have a project in mind? Let's
            connect!
          </p>
          <h5>
            <a href="mailto:diego.almg@hotmail.com">diego.almg@hotmail.com</a>
          </h5>
          <p>+123456789</p>
          <p>Munich, Germany</p>

          <div className="social">
            <a href="" target="_blanck"><FaLinkedin /></a>
            <a href="" target="_blanck"><FaGithub /></a>
            <a href="" target="_blanck"><FaInstagram /></a>
            <a href="" target="_blanck"><FaFacebook /></a>
            <a href="" target="_blanck"><GrCertificate /></a>
          </div>
        </div>
        <div className="contact-right">
          <img src={contactImage} alt="contact" />
        </div>
      </div>
    </section>
  );
}
