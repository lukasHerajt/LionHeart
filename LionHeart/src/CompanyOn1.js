import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ReactLogo } from './icons/QuestionMarkIcon.svg'
import { ReactComponent as ArrowLogo } from './icons/ArrowIcon1.svg'


export default function Company1() {
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

                <h1 className='text-center py-5 col'>What is a Lionheart?</h1>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <ReactLogo />
                </div>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <h2>Hire based on capabilities and potential</h2>
                </div>
            </div>
            <div className='row pb-5 text-center'>
                <div className='col'>
                    <p>Browse Lionheart's talent pool non-traditional talent based on experience, focus, personality strengths and more. </p>
                </div>
            </div>

            <div className='row pb-3 pt-2'>
                <div className='col'>
                    <ArrowLogo
                        className='arrowLogo'
                        onClick={() => {
                            navigate(`/onboarding-C/2`)
                        }} />
                </div>
            </div>



        </div>
    )
}
