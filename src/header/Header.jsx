import './header.css'
import cover from '../Images/cover1.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSmall'>React & Node JS</span>
        <span className='headerTitleLarge'>Blog</span>
      </div>
      <img src={cover} alt='' className='headerImg' />
    </div>
  )
}
