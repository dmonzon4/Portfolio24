// import Title UI *******************
import TitleOne from "../UI/TitleOne"

// Services Shape ********************
// import servicesShape from '../assets/shapes123.svg'

// Services Shape ********************
import { ServicesData } from "../data/Data"

// Services Shape ********************
// Services Shape ********************

export default function Services() {
  return (
    <section id='Services'>
      <div className="container services-container">
        <TitleOne titleEx={'Services'} titleSm={'What will I do for you'} className={'services-title'}/>

        <div className="services-articles">
        {
          ServicesData.services.map((sar, index) => (
            <article key={index} className="service-article">
              <div className="service-icon">
                <sar.icon />
              </div>
              <small>{sar.proCount}</small>
              <h5>{sar.name}</h5>
              <p>{sar.textInfo}</p>
            </article>
          ))
        }
        </div>

        {/* <div className="services-shape">
          <img src={servicesShape} alt="" />
        </div> */}
      </div>
    </section>
  )
}
