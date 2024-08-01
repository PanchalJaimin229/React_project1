import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editData } from './userReducer';

function Edit() {
    const dispatch = useDispatch()
    const [products] = useSelector(state => state.products)
    const ptId = useParams()
    const index = products.findIndex((data) => { return data.id === parseInt(ptId.id) })
    const [id, setId] = useState(products[index].id)
    const [name, setName] = useState(products[index].name)
    const [price, setPrice] = useState(products[index].price)
    const [category, setCategory] = useState(products[index].category)
    const navigate = useNavigate()
    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(editData({ id, name, price, category }))
        navigate('/')
        window.location.reload()
    }
    return (
        <div>
            <div className='row text-start justify-content-center'>
                <div className='col-6'>
                    <h3 className='m-3'>Edit Product</h3>
                    <form onSubmit={handlerSubmit} className='container d-flex flex-column gap-3'>
                        <div className='col-10'>
                            <label className='form-label'>Id: </label>
                            <input value={id} onChange={(e) => { setId(e.target.value) }} className='form-control' disabled />
                        </div>
                        <div className='col-10'>
                            <label className='form-label'>Product Name: </label>
                            <input value={name} onChange={(e) => { setName(e.target.value) }} className='form-control' />
                        </div>
                        <div className='col-10'>
                            <label className='form-label'>Price: </label>
                            <input value={price} onChange={(e) => { setPrice(e.target.value) }} className='form-control' />
                        </div>
                        <div className='col-10'>
                            <label className='form-label'>Phone: </label>
                            <input value={category} onChange={(e) => { setCategory(e.target.value) }} className='form-control' />
                        </div>
                        <div className='col-10'>
                            <button type='submit' className='btn btn-success me-2'>Edit</button>
                            <Link to='/' className='btn btn-primary'>Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit