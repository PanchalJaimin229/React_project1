import React, { useState } from 'react'
import { adduser } from './UseReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';


function Creacte() {

    const users = useSelector(state=>state.users);
    // console.log(users)

    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
   const navigate =  useNavigate("")
  

 const dispatech = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault ();
        dispatech(adduser({id:users[users.length  -1].id +1 ,name,email}))
        navigate("/")

    }
   
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center text-start'>

        <div className='w-50 border bg-warning text-wdark p-5'>
            <h2 className='text-center'>ADD USER</h2>

            <form className='container' onSubmit={handleSubmit}>

                <div className='col-12'>
                    <label className='form-label'>ID</label>
                    <input disabled="disabled" className='form-control'></input>

                </div>
                <div className='col-12'>
                    <label>Name</label>
                    <input  value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control'></input>

                </div>
                <div className='col-12'>
                    <label>Email</label>
                    <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control'></input>

                </div>
               
                <div className='col-12'>
                  <button className='btn btn-info mt-2'>Save</button>

                </div>
            </form>

        </div>
    </div>
  )
}

export default Creacte