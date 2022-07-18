import { Link } from 'react-router-dom'
import './topbar.css'
import userProfile from '../../Images/avatar.png'

export default function TopBar() {
  const user = true
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
          <li className='topListItem'>
            <Link className='link' to='/'>
              home
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              about
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              write
            </Link>
          </li>
          <li className='topListItem'>{user && 'LOGOUT'}</li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img className='topImage' src={userProfile} alt='' />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                login
              </Link>
            </li>

            <li className='topListItem'>
              <Link className='link' to='/register'>
                register
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}
