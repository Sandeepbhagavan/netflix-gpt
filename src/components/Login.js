import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react'
import { checkValidData } from '../utils/validate'

const Login = () => {
    const[isSignIn,setSignIn]=useState(true)
    const [errorMessage,SeterrorMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)

    const signIn=()=>{
        setSignIn(!isSignIn)
    }
    const handleButtonClick=()=>{
        console.log(email.current.value)
        console.log(password.current.value)

        const message=checkValidData(email.current.value,password.current.value)
        SeterrorMessage(message)

    }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
      </div>
      <div>
        <form onSubmit={(e)=>e.preventDefault()}className=' absolute w-60 mx-auto my-36 left-0 right-0 text-white bg-black bg-opacity-70 rounded-lg' >
            <h1 className='m-3 font-bold text-xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn &&(
                <input className='m-3 p-2 h-8 text-black w-max bg-gray-700' type='text' placeholder='name'/>
            )
            }
            <input ref={email}className='m-3 p-2 h-8 text-black w-max bg-gray-700' type='text' placeholder='email'/>
            <input ref={password}className='m-3 p-2 h-8 text-black w-auto bg-gray-700'type='password' placeholder='password'/>
            <button className='bg-red-600 m-3 p-2 rounded-lg w-48 h-9'type='submit'onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign up"}</button>
            <p className='text-red-400 font-bold'>{errorMessage}</p>
            <p className='p-3 cursor-pointer' onClick={signIn}>{isSignIn ? "New User ? Sign Up" : "Already Registered:Sign In"}</p>
            
        </form>
      </div>
    </div>
  )
}

export default Login
