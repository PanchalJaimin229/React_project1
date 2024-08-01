import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from './userReducer'

function ProductList() {
    const [search, setSearch] = useState(null)
    const [searchData, setSearchData] = useState(null)
    const [products] = useSelector(state => state.products)
    const dispatch = useDispatch()

    const onDelete = (id) => {
        dispatch(deleteData(id))
        window.location.reload()
    }

    const onSearch = () => {
        if (search !== null) {
            let result = products.filter((data) => { return data.name.toLowerCase().includes(search.toLowerCase()) })
            setSearchData(result);
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-10'>
                        <div className='container'>
                            <div className='row' style={{ marginTop: 70 }}>
                                <div className='col-12'>
                                    <h2>Search products: </h2>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6 d-flex'>
  <input className='form-control me-2' onChange={(e) => { setSearch(e.target.value) }} type='text' />
          <button className='btn btn-warning' onClick={() => { onSearch() }}>search</button>
                                </div>
                                <div className='col-6 d-flex justify-content-end'>
                                    <Link to='/products/addproducts' className='btn btn-primary'>+ Create Product</Link>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'>
                                    <table className='table table-bordered text-center'>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th style={{ width: 300 }}>Name</th>
                                                <th>Price</th>
                                                <th>Category</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (searchData === null) ?
                                                    products && products.map((data) => (
                                                        <tr key={data.id}>
                                                            <td>{data.id}</td>
                                                            <td>{data.name}</td>
                                                            <td>{data.price}</td>
                                                            <td>{data.category}</td>
                                                            <td>
                                                                <Link to={`/products/viewproducts/${data.id}`} className='btn btn-primary me-2'>Read</Link>
                                                                <Link to={`/products/editproducts/${data.id}`} className='btn btn-info me-2'>Edit</Link>
                                                                <button className='btn btn-danger' onClick={() => { onDelete(data.id) }} >Delete</button>
                                                            </td>
                                                        </tr>
                                                    )) : (searchData.length !== 0) ?
                                                        searchData.map((data) => (
                                                            <tr key={data.id}>
                                                                <td>{data.id}</td>
                                                                <td>{data.name}</td>
                                                                <td>{data.price}</td>
                                                                <td>{data.category}</td>
                                                                <td>
                                                                    <Link to={`/products/viewproducts/${data.id}`} className='btn btn-primary me-2'>Read</Link>
                                                                    <Link to={`/products/editproducts/${data.id}`} className='btn btn-info me-2'>Edit</Link>
                                                                    <button className='btn btn-danger' onClick={() => { onDelete(data.id) }} >Delete</button>
                                                                </td>
                                                            </tr>
                                                        )) :
                                                        <tr>
                                                            <td></td>
                                                            <td>No matching results.</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList