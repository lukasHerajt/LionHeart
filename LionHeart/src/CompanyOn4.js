import React from 'react'
import './CompanyApp.css'
import InputField from './InputField'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLogo } from './icons/ArrowIcon4.svg'


export default function Company4() {
    const navigate = useNavigate()
    const [inputFields, setInputFields] = React.useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
    })

    const handleInputChange = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.id]: e.target.value,
        })
        console.log('state: ', inputFields)
    }

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

                <h1 className='text-center py-5 col'>Personal Information</h1>
            </div>
            <div className='row pb-5'>
                <div className='col'>
                    <InputField
                        label='First name'
                        type='text'
                        name='firstName'
                        active='focused'
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='row pb-5'>
                <div className='col'>
                    <InputField
                        label='Last name'
                        type='text'
                        name='lastName'
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='row pb-5'>
                <div className='col'>
                    <InputField
                        label='Phone number'
                        type='text'
                        name='phoneNumber'
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>

            <div className='row pb-5'>
                <div className='col'>
                    <InputField
                        label='Location'
                        type='text'
                        name='location'
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>

            <div className='row pb-3 pt-2'>
                <div className='col'>
                    <ArrowLogo
                        className='arrowLogo'
                        onClick={() => {
                            console.log('state: ', inputFields)
                            navigate(`/onboarding-C/5`)
                        }} />
                </div>
            </div>
        </div>
    )
}
