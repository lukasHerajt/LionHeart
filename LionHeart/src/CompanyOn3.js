import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ReactLogo } from './icons/ProfileIcon.svg'
import { ReactComponent as ArrowLogo } from './icons/ArrowIcon3.svg'


export default function Company3() {
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

                <h1 className='text-center py-5 col'>One-click apprenticeships</h1>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <ReactLogo />
                </div>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <h2>Assign Tasks and Grow Your Business.</h2>
                </div>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <p>Help your project and your apprentice by setting ambitious tasks that your apprentice can work towards. Check in week to week.  </p>
                </div>
            </div>

            <div className='row pb-3 pt-2'>
                <div className='col'>
                    <ArrowLogo
                        className='arrowLogo'
                        onClick={() => {
                            navigate(`/onboarding-C/4`)
                        }} />
                </div>
            </div>
        </div>
    )
}
