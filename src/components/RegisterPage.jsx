import React from 'react'

export const RegisterPage = () => {
  return (
    <div>
        <form className='register' action="">
        <h1>Register</h1>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <button>Register</button>
        </form>
    </div>
  )
}
