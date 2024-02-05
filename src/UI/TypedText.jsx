import { TypeAnimation } from 'react-type-animation';

export default function TypedText() {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer 💻',
        1000,
        'Mern Stack Dev 📱',
        1000,
        'Enthusiastic Dev 😎',
        1000,
        'React 🌐',
        1000,
        'JavaScript',
        1000,
        'NodeJS',
        1000,
        'MongoDB',
        1000,
      ]}
      wrapper="div"
      speed={25}
      style={{ fontSize: '25px', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}
