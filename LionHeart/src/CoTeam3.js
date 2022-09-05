import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import InputField from './InputField'




export default function CoTeam3() {
    const navigate = useNavigate()
    const width = window.innerWidth
    console.log('width: ', width)
    return (
        <>

            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-auto main-container-wNav`}>

                <div className='text-left row'>
                    <div className='col-5 back-btn'
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        &#8701;
                    </div>
                    <h3 className='text-left col-7 shadow-sm'>New Task</h3>
                </div>

                <div className='row py-2'>

                    <div className='col-12 shadow-sm'>
                        <InputField
                            label='Title'
                            type='text'
                            name='Title'
                            active='focused'
                        />
                    </div>
                    <div className='col-12 shadow-sm'>
                        <InputField
                            label='Due date'
                            type='date'
                            name='date'
                        />
                    </div>
                    <div className='col-12 shadow-sm'>
                        <InputField
                            label='Description'
                            type='textarea'
                            name='Description'
                        />
                    </div>
                </div>


                <Button
                    className='shadow-lg position-fixed addTaskBtn px-5'
                    onClick={() => {
                        navigate('/Team/3')
                    }
                    } >Save Task</Button>

            </div>
        </>
    )
}
