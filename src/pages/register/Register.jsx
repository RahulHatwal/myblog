import './register.css'
import { Link } from 'react-router-dom'

export default function register() {
  return (
    <div className='register'>
      <span className='registerTitle'>register</span>
      <div className='registerForm'>
        <label>username</label>
        <input type='text' placeholder='Enter your username' />

        <label>email</label>
        <input type='text' placeholder='Enter your email' />

        <label>password</label>
        <input type='password' placeholder='Enter your password' />
        <button className='registerBtn'>register</button>
      </div>
      <button className='registerLoginBtn'>
        <Link className='link' to='/login'>
          login
        </Link>
      </button>
    </div>
  )
}
