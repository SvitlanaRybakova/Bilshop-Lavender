import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faFilePdf, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Confirmation.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { ShopCartContext } from '../contexts/ShopCartContext'
import { CarContext } from '../contexts/CarContext';


function Confirmation() {

    const { userData } = useContext(UserContext)
    const { purchases } = useContext(ShopCartContext)
    const { showPrice } = useContext(CarContext);
    
    const printConfirmation = () => {
        window.print()
    }

    function currentDate() {
        const today = new Date(); 
        const nullBeforeMonth = today.getMonth() <= 9 ? '0' : '' 
        const nullBeforeDay = today.getDate() <= 9 ? '0' : '' 
        const date = nullBeforeDay + today.getDate() + '.' + nullBeforeMonth + (today.getMonth() + 1) + '.' + today.getFullYear();
        return date
    }

    return (
        <div className={`${styles.toPrint} container mt-5 py-5 px-5 border`}>
            <div className={`${styles.companyContacts} d-flex align-items-start`}>
                <div className='flex-grow-1'>
                    <img src={`../../logo.png`} alt="Logo" className='logo'/>
                    <div className='brandName ms-3 mt-2'>Car Market <p className='subBrand'>Lavender</p></div>
                </div>
                <button onClick={printConfirmation}>
                    <FontAwesomeIcon icon={faPrint} size='2x' className={styles.icon}/>
                </button>
                <button className='ps-4'>
                    <FontAwesomeIcon icon={faFilePdf} size='2x'className={styles.icon}/>
                </button>
                <div className='ps-4'>
                    <p>Car Market, Inc</p>
                    <p>605, Ratan Icon Building, <br/> Skåne, Sweden, 90002</p>
                    <p>Tel: 070-0000-0077</p>
                    <p>Email: cars@mailgo.dev</p>
                </div>
                <div>
                    <Link to="/" className={styles.closeButton}>
                        <FontAwesomeIcon icon={faTimesCircle} size='lg' />
                    </Link>
                </div>
            </div>
            <div className='customer-contacts mt-5'>
                <p>Customer Name: <b>{userData.firstName} {userData.lastName}</b></p>
                <p>Customer Address: <b>{userData.postcode}, {userData.city}, {userData.streetAddress}</b></p>
                <p>Customer Tel: <b>{userData.phone}</b></p>
                <p>Customer Email: <b>{userData.email}</b></p>
            </div>
            <div className='d-flex flex-column d-sm-block mt-5'>
                <p>Date: <b>{currentDate()}</b></p>
                <p>Customer ID: <b>{userData.userId}</b></p>
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
                        {
                            purchases.products.map((product, i) => (
                                <tr>
                                    <td>{product.make} {product.model} {product.year}</td>
                                    <td>{showPrice(product.price)} SEK</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <p className={`${styles.totalPrice} mt-4`}>Total: {showPrice(purchases.priceTotal)} SEK</p>
            </div>
            <div className='my-5'>
                <p>Thank you for your purchase! If you have any questions contact us cars@mailgo.dev</p>
            </div>
           
        </div>
    )
}

export default Confirmation
