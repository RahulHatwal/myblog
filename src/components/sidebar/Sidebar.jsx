import './sidebar.css'
import userAvatar from '../../Images/avatar.png'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>about me</span>
        <img src={userAvatar} alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum
          saepe laborum vel dicta asperiores aspernatur blanditiis
          exercitationem necessitatibus deserunt ipsa.
        </p>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>categories</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>life</li>
          <li className='sidebarListItem'>style</li>
          <li className='sidebarListItem'>sport</li>
          <li className='sidebarListItem'>cinema</li>
          <li className='sidebarListItem'>music</li>
          <li className='sidebarListItem'>tech</li>
        </ul>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>follow us</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-twitter-square'></i>
          <i className='sidebarIcon fa-brands fa-facebook-square'></i>
          <i className='sidebarIcon fa-brands fa-pinterest-square'></i>
          <i className='sidebarIcon fa-brands fa-instagram-square'></i>
        </div>
      </div>
    </div>
  )
}
