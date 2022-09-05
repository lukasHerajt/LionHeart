import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import ApprenticeCard from './ApprenticeCard'




export default function CoTeam() {
    const navigate = useNavigate()
    const width = window.innerWidth
    console.log('width: ', width)
    return (
        <>

            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-auto main-container-wNav`}>

                <div className='row'>
                    <div className='shadow-sm col-6'>
                        <h5 className='text-left py-3 shadow-sm'>Active Apprentices</h5>
                    </div>
                    <div className='shadow-sm col-6'>

                        <h5 className='text-left py-3 shadow-sm'>Favorite Apprentices</h5>
                    </div>
                </div>
                <div className='row m-3 shadow'
                    onClick={() => {
                        navigate('/Team/2')
                    }}
                >

                    <ApprenticeCard />
                </div>
                <div className='row m-3 shadow'
                    onClick={() => {
                        navigate('/Team/2')
                    }}
                >


                    <ApprenticeCard />
                </div>
                <div className='row m-3 shadow'
                    onClick={() => {
                        navigate('/Team/2')
                    }}
                >


                    <ApprenticeCard />
                </div>




            </div>
        </>
    )
}
