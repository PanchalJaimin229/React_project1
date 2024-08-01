import React from 'react'
import { useDispatch } from 'react-redux'
import { AddTask } from '../action'

const AddTaskForm = ({newTask, setNewTask }) => {
    const dispatch = useDispatch()
    
    return (
        <>
            <div className='row'>
                <div className="col">
                    <input type="text" className='form-control-lg form-control'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button className='btn btn-success btn-lg' onClick={()=>dispatch(AddTask(newTask), setNewTask(""))}>Add Task</button>
                </div>
            </div>
        </>
    )
}

export default AddTaskForm
