// Skills Data ********************
import { SkillsData } from "../data/Data"

// React circular Progressbar Data ***********************
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
  return (
    <section id='Skills'>
      <div className='container skills-container'>
        {
          SkillsData.map(({skillName, percentage}, index) => {
            return(
              <div className="circulare-box" key={index}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      // Path color
                      stroke: '#1A74E2',
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'butt',
                      // Customize transition animation
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                      // Rotate the path
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      // Trail color
                      stroke: '#FFFFFF',
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'butt',
                      // Rotate the trail
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    // Customize the text
                    text: {
                      // Text color
                      fill: '#FFFFFF',
                      // Text size
                      fontSize: '16px',
                    },
                    // Customize background - only used when the `background` prop is true
                    // background: {
                    //   fill: '#1A74E2',
                    // },
                  }}
                />
                <p className="skills-name">{skillName}</p>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}
