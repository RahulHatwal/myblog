import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <div className='loginForm'>
        <label>email</label>
        <input type='text' placeholder='Enter your email' />

        <label>password</label>
        <input type='password' placeholder='Enter your password' />
        <button className='loginBtn'>login</button>
      </div>
      <button className='loginRegisterBtn'>
        <Link className='link' to='/register'>
          register
        </Link>
      </button>
    </div>
  )
}
