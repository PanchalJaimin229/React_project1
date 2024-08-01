import React from 'react'
import {changeTask,updateTask,cancelUpdate} from "../action"
import { useDispatch } from 'react-redux'
const UpdateForm = ({updateData,setUpdateData}) => {
    const dispatch = useDispatch()
    const changeTask = (e) => {
        setUpdateData({
            ...updateData,
            title : e.target.value
        })
    }
    return (
        <>
            <div className="row">
                <div className="col">
                    <input type="text" className='form-control form-control-lg' value={updateData && updateData.title} onChange={(e) => (changeTask(e))} />
                </div>
                <div className="col-auto">
                    <button className='btn btn-lg btn-success me-4' onClick={()=>dispatch(updateTask(updateData),setUpdateData(""))} >Update</button>
                    <button className='btn btn-lg btn-danger' onClick={()=>setUpdateData("")}>Cancel</button>
                </div>
            </div>
        </>

    )
}

export default UpdateForm
