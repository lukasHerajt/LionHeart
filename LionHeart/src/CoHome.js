import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import InputField from './InputField'
import { ReactComponent as Icon } from './icons/CoHomeIcon1.svg'
import SkillsCarousel from './SkillsCarousel'





export default function CoHome() {
    const navigate = useNavigate()
    const width = window.innerWidth
    const [inputFields, setInputFields] = React.useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.id]: e.target.value,
        })
        console.log('state: ', inputFields)
    }
    return (
        <>
            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-4 mx-auto main-container-wNav`}>
                <div className='row'>

                    <h5 className='text-left py-3 col shadow-sm'>Welcome, Rachel👋</h5>
                </div>
                <div className='row'>

                    <h1 className='text-center py-3 col'>What type of skill are you looking for?</h1>
                </div>




                <div className='row py-2'>

                    <div className='col shadow-sm'>
                        <InputField
                            label='Skills or discipline'
                            type='text'
                            name='skillsOrDiscipline'
                            active='focused'
                            handleInputChange={handleInputChange}
                        />
                    </div>
                </div>




                <div className='row'>
                    <div className='col-12 text-center'>
                        <Icon
                            className='companyHomeIcon'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col skillsCarousel'>
                        <SkillsCarousel />
                    </div>
                </div>
                <Button onClick={() => {
                    console.log('state: ', inputFields)
                    navigate('/Company/2')
                }
                } >CoHome2</Button>
            </div>
        </>
    )
}
