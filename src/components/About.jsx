// *********************importing About Data*************************
import { AboutData } from "../data/Data";

// *********************UI TitleOne***************************
import TitleOne from "../UI/TitleOne";

export default function About() {
  return (
    <section id="About">
      {AboutData.map(({Image, AboutMe, AboutContactText, CV, Email }, index) => {
          return (
            <div className="container about-container" key={index}>
              <div className="about-left">
                <img src={Image} alt="AboutMe" />
              </div>

              <div className="about-right">

                <TitleOne titleSm={"let me introduce myself"} title={"About"} titleEx={"Me"} />

                <div className="aboutMe-info">
                  <h5 className="about-small-title">A story of hardwork and perseverance. </h5>
                  <p>{AboutMe}</p>
                </div>

                <div className="aboutMe-contact-info">
                  <h5 className="about-small-title">Contact</h5>
                  <p>{AboutContactText}</p>
                  <a href={`mailto:${Email}`}>{Email}</a>
                </div>

                <div className="about-action-aria">
                  <a href="#Contact" className="btn btn-danger">Hire Me</a>
                  <a href={CV} download className="btn btn-primary">Download CV</a>
                </div>
              
              </div>
            </div>
          );
        })
      }
    </section>
  );
}
