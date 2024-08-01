import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { editUsers } from './UseReducer';


function Edituser() {

    const {userid} = useParams();
    // console.log(userid)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const users= useSelector(state => state.users);
    console.log(users)

   
    const existingUser = users.filter(user=>       
        user.id == userid
    )

    //  console.log(existingUser[0])


    const {name,email} = existingUser[0];

   
    const [uname,setuName] = useState(name)
    const [uemail,setuEmail] = useState(email)

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(editUsers({id:userid,name:uname,email:uemail}));
        navigate("/")
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center text-start'>

    <div className='w-50 border bg-info text-wdark p-5'>
        <h2 className='text-center'>EDIT USER</h2>

        <form className='container' onSubmit={handleSubmit}>

            <div className='col-12'>
                <label className='form-label'>ID</label>
                <input disabled="disabled" className='form-control'></input>

            </div>
            <div className='col-12'>
                <label>Name</label>
                <input value={uname} onChange={(e)=>{setuName(e.target.value)}} className='form-control'></input>

            </div>
            <div className='col-12'>
                <label>Email</label>
                <input value={uemail} onChange={(e)=>{setuEmail(e.target.value)}} className='form-control'></input>

            </div>
           
            <div className='col-12'>
              <button className='btn btn-success mt-2'>Upadte User</button>

            </div>
        </form>

    </div>
</div>
  )
}

export default Edituser