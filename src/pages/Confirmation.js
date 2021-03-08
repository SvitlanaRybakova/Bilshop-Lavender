import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faFilePdf, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Confirmation.module.css'
import { Link } from 'react-router-dom'

function Confirmation() {
    return (
        <div className='container mt-5 py-5 px-5 border'>
            <div className={`${styles.companyContacts} d-flex align-items-start`}>
                <div className='flex-grow-1'>
                    <img src={`../../logo.png`} alt="Logo" className='logo'/>
                    <div className='brandName ms-3 mt-2'>Car Market <p className='subBrand'>Lavender</p></div>
                </div>
                <button>
                    <FontAwesomeIcon icon={faPrint} size='2x'/>
                </button>
                <button className='ps-4'>
                    <FontAwesomeIcon icon={faFilePdf} size='2x'/>
                </button>
                <div className='ps-4'>
                    <p>Car Market, Inc</p>
                    <p>605, Ratan Icon Building, <br/> Skåne, Sweden, 90002</p>
                    <p>Tel: 070-0000-0077</p>
                    <p>Email: cars@mailgo.dev</p>
                </div>
                <div>
                    <Link to="/" className={styles.closeButton}>
                        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
                    </Link>
                </div>
            </div>
            <div className='customer-contacts mt-5'>
                <p>Customer Name: name</p>
                <p>Customer Address: address</p>
                <p>Customer Tel: Telephone</p>
                <p>Customer Email: Email</p>
            </div>
            <div className='d-flex flex-column d-sm-block mt-5'>
                <p>Date: Date</p>
                <p>Customer ID: ID</p>
            </div>
            <div>
                <h3 className='mt-5 pb-2 text-center'>Order Information</h3>
                <table class="table table-responsive table-bordered ">
                    <thead>
                        <tr>
                            <th className='text-center'>Product</th>
                            <th className='text-center'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car make, car model, car year</td>
                            <td>100 000 SEK</td>
                        </tr>
                        <tr>
                            <td>Car make, car model, car year</td>
                            <td>100 000 SEK</td>
                        </tr>
                        <tr>
                            <td>Delivery</td>
                            <td>5 000 SEK</td>
                        </tr>
                    </tbody>
                </table>
                <p className={`${styles.totalPrice} mt-4`}>Total: 200 000 SEK</p>
            </div>
            <div className='my-5'>
                <p>Thank you for your purchase! If you have any questions contact us cars@mailgo.dev</p>
            </div>
           
        </div>
    )
}

export default Confirmation
