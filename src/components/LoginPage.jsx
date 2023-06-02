import React from 'react'

export const LoginPage = () => {
  return (
    <div>
        <form className="login" action="">
        <h1>Login</h1>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <button>Login</button>
        </form>
    </div>
  )
}
