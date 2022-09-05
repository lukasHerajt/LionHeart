import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'



export default function CoHome5() {
    const navigate = useNavigate()
    const width = window.innerWidth

    return (
        <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-4 mx-auto main-container-wNav blue coHome5-container `}>

            <div className='row'>
                <h1 className="text-center">Congratulations! 🎉</h1>
            </div>
            <div className='row text-center'>
                <div className='col'>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-circle m-3" style={{ width: 150 }}
                        alt="Avatar" />
                </div>
            </div>
            <div className='row text-center'>
                <div className='col'>
                    <h3>You’ve started an apprenticeship with
                        Richard Saunders 🤝</h3>
                </div>
            </div>
            <Button className='col-12' color='primary'>
                View Apprentice
            </Button>
            <div className='row text-center py-3'>
                <div className='col'>
                    <p>By continuing you agree to Lionheart's Terms of Service</p>


                </div>
            </div>
        </div>
    )
}