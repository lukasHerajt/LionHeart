import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'



export default function CoHome4() {
    const navigate = useNavigate()
    const width = window.innerWidth

    return (
        <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-4 mx-auto main-container-wNav`}>

            <div className='text-left row'>
                <div className='col-3 back-btn'
                    onClick={() => {
                        navigate(-1)
                    }}
                >
                    &#8701;
                </div>
                <h3 className='text-left col-9 shadow-sm'>Confirm and pay</h3>
            </div>

            <div className='row py-3 shadow'>
                <div className='col-12'>
                    <h5>Price Details</h5>
                </div>
                <div className='col-3'>
                    <p>$45.00 x 2 nighs</p>
                </div>
                <div className='col-9 text-end'>
                    <p>$90.00</p>
                </div>
                <div className='col-3'>
                    <p>$45.00 x 2 nighs</p>
                </div>
                <div className='col-9 text-end'>
                    <p>$90.00</p>
                </div>
                <div className='col-3'>
                    <p>$45.00 x 2 nighs</p>
                </div>
                <div className='col-9 text-end'>
                    <p>$90.00</p>
                </div>
                <div className='col-3'>
                    <p>$45.00 x 2 nighs</p>
                </div>
                <div className='col-9 text-end'>
                    <p>$90.00</p>
                </div>
                <div className='col-12 text-end'>
                    <p>More info</p>
                </div>
            </div>
            <div className='row py-3 shadow'>
                <div className='col-12'>
                    <h5>Pay with</h5>
                </div>
                <div className='col-3'>
                    <p>Visa</p>
                </div>
                <div className='col-9 text-end'>
                    <p>Edit</p>
                </div>

            </div>
            <div className='row py-3 shadow'>
                <div className='col-12'>
                    <h5>Cancellation policy</h5>
                </div>
                <div className='col-12'>
                    <p>Note that we don’t provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read. </p>
                </div>
            </div>
            <div className='row py-3 shadow'>
                <div className='col-12'>
                    <p>Note that we don’t provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read. </p>

                </div>
                <Button className='col-12' color='primary' onClick={() => { navigate('/Company/5') }}>Confirm and pay</Button>
            </div>
        </div>
    )
}