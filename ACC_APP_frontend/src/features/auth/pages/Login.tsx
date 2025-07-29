import React,{useState} from 'react'
import { allRoutes } from '../../../app/router/allRoutes';
import {Link} from 'react-router-dom';
export default function Login() {

  return (
    <>
 
    <div  className='w-75 mx-auto'>
      <h2 className="">
        Login now
        </h2>
        <form >
         
          <label htmlFor="email">email</label>
         <input    className="form-control mb-2" id='email' name='email' />
          <label htmlFor="password">password</label>
         <input  type="text" className="form-control mb-2" id='password' name='password' />
          
        <button type='submit' className="btn btn-outline-info">
           {/* {isLoading===true?<i className='fas fa-spinner fa-spin'></i>:'Login'} */}
       </button> </form>
      </div>

    </>
  )
}
