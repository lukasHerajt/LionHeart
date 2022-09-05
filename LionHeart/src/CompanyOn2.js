import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ReactLogo } from './icons/MagnifyingGlassIcon.svg'
import { ReactComponent as ArrowLogo } from './icons/ArrowIcon2.svg'


export default function Company2() {
    const navigate = useNavigate()

    return (
        <div className='container mt-0 px-auto py-3 main-container'>
            <div className='text-left row'>
                <div className='col back-btn'
                    onClick={() => {
                        navigate(-1)
                    }}
                >
                    &#8701; Back
                </div>
            </div>
            <div className='row'>

                <h1 className='text-center py-5 col'>How it works?</h1>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <ReactLogo />
                </div>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <h2>Click, Bid, Win</h2>
                </div>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <p>Find the right apprentice and bid on their  contract at an hourly rate that works for you.  </p>
                </div>
            </div>

            <div className='row pb-3 pt-2'>
                <div className='col'>
                    <ArrowLogo
                        className='arrowLogo'
                        onClick={() => {
                            navigate(`/onboarding-C/3`)
                        }} />
                </div>
            </div>
        </div>
    )
}
