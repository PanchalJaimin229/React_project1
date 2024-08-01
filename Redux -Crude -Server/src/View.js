import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function View() {
    const [products] = useSelector(state => state.products)
    const ptId = useParams()
    const index = products.findIndex((data) => { return data.id === parseInt(ptId.id) })
    return (
        <div className='container'>
            <h3 className='text-center m-4'>Product List</h3>
            <div className='row justify-content-center'>
                <div className='col-6 border border-4 h4'>
                    <div className='row border'>
                        <div className='col-6 bg-primary text-white p-1'>Id: </div>
                        <div className='col-6 p-1'>{products[index].id}</div>
                    </div>
                    <div className='row border'>
                        <div className='col-6 bg-primary text-white p-1'>Product Name: </div>
                        <div className='col-6 p-1'>{products[index].name}</div>
                    </div>
                    <div className='row border'>
                        <div className='col-6 bg-primary text-white p-1'>Price: </div>
                        <div className='col-6 p-1'>{products[index].price}</div>
                    </div>
                    <div className='row border'>
                        <div className='col-6 bg-primary text-white p-1'>Category: </div>
                        <div className='col-6 p-1'>{products[index].category}</div>
                    </div>
                </div>
                <div className='row justify-content-center m-3'>
                    <div className='col-2'>
                        <Link to='/' className='btn btn-primary'>Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View