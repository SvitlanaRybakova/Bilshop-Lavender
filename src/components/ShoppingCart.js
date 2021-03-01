
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash  } from '@fortawesome/free-solid-svg-icons'

function ShoppingCart() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className="table-responsive">
                        <table className="table table-bordered text-center mb-0">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
            
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <button><FontAwesomeIcon icon={faTrash}/></button>
                                            </div>
                                            <a href="#">
                                                <img src="http://source.unsplash.com/200x200?car" alt="Product" />
                                            </a>
                                            <a href="#">Toyota x600</a>
                                        </div>
                                    </td>
                                    <td>
                                        <span>100 000kr</span>
                                    </td>
                                    
                                    <td>
                                        <span>100 000kr</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart