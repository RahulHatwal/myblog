import './header.css'
import cover from '../Images/cover2.jpg'

export default function Header() {
  return (
    <div className='header'>
      <img className='headerImg' src={cover} alt='' />
      <div className='headerTitles'>
        <span className='headerTitleSmall'>Rahul Hatwal</span>
        <span className='headerTitleLarge'>Blog</span>
      </div>
    </div>
  )
}
