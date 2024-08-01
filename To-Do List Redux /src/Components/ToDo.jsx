import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { Deletetask,markDone, updateTask } from '../action';


const ToDo = ({todo,setUpdateData}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {/* display todo */}
            {
                todo && todo.sort((a, b) => b.id > a.id ? -1 : 1)
                    .map((task, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="col taskbg">
                                    <div className={task.status ? "done" : ""}>
                                        <span className=' textNumber'>{index + 1} </span>
                                        <span className="tasktext">{task.title} </span>
                                    </div>
                                    <div className="iconswrap">
                                        <span title='Completed / Not Completed'>
                                            <FontAwesomeIcon icon={faCircleCheck} onClick={() => dispatch(markDone(task.id))} />
                                        </span>
                                        {
                                            task.status ? null :
                                                <span title='Edit'>
                                                    <FontAwesomeIcon icon={faPen}
                                                        onClick={()=>(setUpdateData({
                                                            id: task.id,
                                                            title: task.title,
                                                            status: task.status
                                                        }))}
                                                    />
                                                </span>
                                        }

                                        <span title='Delete'>
                                            <FontAwesomeIcon icon={faTrashCan} onClick={() => dispatch(Deletetask(task.id))} />
                                        </span>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
            }
        </div>
    )
}

export default ToDo
