import React from 'react'
import './CompanyApp.css'
import InputField from './InputField'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLogo } from './icons/ArrowIcon5.svg'


export default function Company5() {
    const navigate = useNavigate()
    const [inputFields, setInputFields] = React.useState({
        jobTitleOrRole: '',
        websiteURL: '',
        companySize: '',
        industry: '',
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

                <h1 className='text-center py-5 col'>Company Information</h1>
            </div>
            <div className='row pb-5'>
                <div className='col'>
                    <InputField
                        label='Job title or role'
                        type='text'
                        name='jobTitleOrRole'
                        active='focused'
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='row pb-5'>
                <div className='col'>
                    <InputField
                        label='Website URL'
                        type='text'
                        name='websiteURL'
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='row pb-5'>
                <div className='col'>
                    <InputField
                        label='Company size'
                        type='number'
                        name='companySize'
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>

            <div className='row pb-5'>
                <div className='col'>
                    <InputField
                        label='Industry'
                        type='text'
                        name='industry'
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
                            navigate(`/onboarding-C/6`)
                        }} />
                </div>
            </div>
        </div>
    )
}
