import React, { useEffect } from 'react'
import ProductList from './ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import Edit from './Edit'
import View from './View'
import { useDispatch } from 'react-redux'
import { userData } from './userReducer'

function Products() {

    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((res) => { return res.json() })
            .then((data) => { dispatch(userData(data)) })
    }, [dispatch])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductList />} />
                    <Route path='/products/addproducts' element={<AddProduct />} />
                    <Route path='/products/editproducts/:id' element={<Edit />} />
                    <Route path='/products/viewproducts/:id' element={<View />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Products