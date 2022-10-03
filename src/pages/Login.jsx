import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Aman Chat App <i className="rocketchat icon big"></i></span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
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
