import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Actions';

function Counter() {
    const count =  useSelector(state=>state.count);
    const dispatch = useDispatch();
  return (
    <div>

<div className=' m-5'>
<button className='btn btn-info' onClick={()=>{dispatch(increment())}}>-</button>
        <h2>{count}</h2>
        <button className='btn btn-success' onClick={()=>{dispatch(decrement())}}>+</button>
</div>
       
    </div>
  )
}

export default Counter