import {useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

export const Header = () => {

   const {setUserInfo,userInfo} = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:4000/profile',{
            credentials:'include',
        })
        .then(res=>{
            res.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    },[])

    const logout = () => {
        fetch('http://localhost:4000/logout',{
            method: 'POST',
            credentials : 'include'
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">BlogSpeare</Link>
      <nav>
        {username && (
            <>
            <Link to="/create">Create new blog</Link>
            <a onClick={logout}>Logout</a>
            </>
        )}
        {!username && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
        )}
      </nav>
    </header>
  )
}
