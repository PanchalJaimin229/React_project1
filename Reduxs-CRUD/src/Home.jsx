import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUsers } from './UseReducer';




function Home() {
    const users = useSelector(state=>state.users);
    // console.log(users)
 const  dispatch =useDispatch();

    const LoadDelete =(id)=>{
       
        dispatch(deleteUsers({id:id}))

    }
  return (
    <div className='container '>
        <h2>Redux CRUD Aap</h2>
        <Link to="/create" className='btn btn-primary my-2'>ADD NEW +</Link>
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {users.map((items)=>(
                     <tr key={items.id}>
                     <td>{items.id}</td>
                     <td>{items.name}</td>
                     <td>{items.email}</td>
                     <td>
                         <Link  to={`/edit/${items.id}` }className='btn btn-success me-2'>Edit</Link>
                         <button onClick={()=>{LoadDelete(items.id)}}className='btn btn-danger'>Delete</button>
                         
                     </td>
                 </tr>

                ))}
               
            </tbody>
        </table>

    </div>
  )
}

export default Home