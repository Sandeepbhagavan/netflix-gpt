import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const[isSignIn,setSignIn]=useState(true)
    
    const signIn=()=>{
        setSignIn(!isSignIn)
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
      </div>
      <div>
        <form className=' absolute w-60 mx-auto my-36 left-0 right-0 text-white bg-black bg-opacity-70 rounded-lg' >
            <h1 className='m-3 font-bold text-xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn &&(
                <input className='m-3 p-2 h-8 text-black w-max bg-gray-700' type='text' placeholder='name'/>
            )
            }
            <input className='m-3 p-2 h-8 text-black w-max bg-gray-700' type='text' placeholder='email'/>
            <input className='m-3 p-2 h-8 text-black w-auto bg-gray-700'type='password' placeholder='password'/>
            <button className='bg-red-600 m-3 p-2 rounded-lg w-48 h-9'type='submit'>{isSignIn ? "Sign In" : "Sign up"}</button>
            <p className='p-3 cursor-pointer' onClick={signIn}>{isSignIn ? "New User ? Sign Up" : "Already Registered:Sign In"}</p>
        </form>
      </div>
    </div>
  )
}

export default Login
