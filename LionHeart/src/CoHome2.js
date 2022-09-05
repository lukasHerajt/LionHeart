import React from 'react'
import './CompanyApp.css'
import FeaturedApprentices from './FeaturedApprentices'
import { useNavigate } from 'react-router-dom'
import ApprenticeCard from './ApprenticeCard'



export default function CoHome2() {
    const navigate = useNavigate()
    const width = window.innerWidth
    return (
        <>

            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-4 mx-auto main-container-wNav`}>

                <div className='text-left row'>
                    <div className='col-3 back-btn'
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        &#8701;
                    </div>
                    <h2 className='text-left col-9 shadow-sm'>Website Design</h2>
                </div>

                <div className='row'>

                    <h5 className='text-center py-3 col'>Featured Apprentices</h5>
                </div>
                <div className='row'>
                    <FeaturedApprentices />
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Apprentices</h2>
                    </div>
                </div>
                <div className='row'
                    onClick={() => {
                        navigate('/Company/3')
                    }}
                >
                    <ApprenticeCard />
                </div>
                <div className='row py-4'
                    onClick={() => {
                        navigate('/Company/3')
                    }}
                >
                    <ApprenticeCard />
                </div>







            </div>
        </>
    )
}