import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Aman Chat App <i className="rocketchat icon big"></i></span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='Enter your email'/>
                <input type="password" placeholder='Password'/>
                <button className='sign'>Sign in</button>
            </form>
            <p className='sign-p'>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login
