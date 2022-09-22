import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Aman Chat App <i className="rocketchat icon big"></i></span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='Enter your name'/>
                <input type="email" placeholder='Enter your email'/>
                <input type="password" placeholder='Set password'/>
                <input style={{display: "none"}} type="file" id='avatar'/>
                <label htmlFor='avatar' className='label-reg'><i class="file icon big"></i><span className='pickAvatar'>Pick an avatar</span></label>
                <button className='sign'>Sign up</button>
            </form>
            <p className='sign-p'>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
