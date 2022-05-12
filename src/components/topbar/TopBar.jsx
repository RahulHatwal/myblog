import './topbar.css'
import userProfile from '../../Images/avatar.png'

export default function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-twitter-square'></i>
        <i className='topIcon fa-brands fa-facebook-square'></i>
        <i className='topIcon fa-brands fa-pinterest-square'></i>
        <i className='topIcon fa-brands fa-instagram-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>home</li>
          <li className='topListItem'>about</li>
          <li className='topListItem'>contact</li>
          <li className='topListItem'>write</li>
          <li className='topListItem'>logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImage' src={userProfile} alt='' />
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}
