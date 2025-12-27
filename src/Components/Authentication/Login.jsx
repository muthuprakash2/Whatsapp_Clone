import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password){
            onLogin()
        }
    }

  return (
    <div className='auth-page'>
        <div className="auth-box">
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />

                <input type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />

                <button type='submit'>Login</button>
            </form>

            <p>Don't have a account?
                <Link to="/register"><span> Sign up</span></Link>
            </p>
        </div>
    </div>
  )
}

export default Login