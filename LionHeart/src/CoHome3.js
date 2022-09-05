import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import ApprenticeCard from './ApprenticeCard'
import BidCard from './BidCard'




export default function CoHome3() {
    const navigate = useNavigate()
    const [inputFields, setInputFields] = React.useState({
        bid: '15',
    })

    const handleInputChange = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.id]: e.target.value,
        })
        console.log('state: ', inputFields)
    }
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
                    <h3 className='text-left col-9 shadow-sm'>Johnathan Fuller</h3>
                </div>

                <div className='row py-3'>

                    <ApprenticeCard blue={true} />

                </div>

                <div className='row py-3'>
                    <div className='col d-flex justify-content-between text-danger'>
                        <p>Somebody out bided you!</p>
                        <p>!</p>

                    </div>
                </div>
                <div className='row py-3'>
                    <div className='col d-flex justify-content-between text-danger'>
                        <h5 className="alert-danger ale">5 min left to bid</h5>
                        <div>

                            <h3 className="d-inline-block">Current Bid: </h3><h1 className="d-inline-block"> {inputFields.bid}$</h1>
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <BidCard
                        bid={inputFields.bid}
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>
        </>
    )
}