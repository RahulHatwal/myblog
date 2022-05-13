import './settings.css'
import pp from '../../Images/avatar.png'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>update your account</span>
          <span className='settingsDeleteTitle'>delete account</span>
        </div>
        <form className='settingsForm'>
          <label>profile picture</label>
          <div className='settingsPP'>
            <img src={pp} alt='' />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon fa-regular fa-circle-user'></i>
            </label>
            <input type='file' style={{ display: 'none' }} id='fileInput' />
          </div>

          <label>Username</label>
          <input type='text' placeholder='Firstname Lastname' />
          <label>Email</label>
          <input type='text' placeholder='email@xyz.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
