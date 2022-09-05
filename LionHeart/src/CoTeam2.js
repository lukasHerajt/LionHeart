import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import ApprenticeCard from './ApprenticeCard'
import TaskCard from './TaskCard'




export default function CoTeam2() {
    const navigate = useNavigate()
    const [taskSwitch, setTaskSwitch] = React.useState(false)
    const width = window.innerWidth
    return (
        <>

            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-auto main-container-wNav`}>


                <div className='row shadow'>
                    <div className='col-3 back-btn p-2'
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        &#8701;
                    </div>
                    <ApprenticeCard />
                </div>

                <div className='row cursor-pointer'>
                    <div className='shadow col-6 cursor-pointer btn'
                        onClick={() => {
                            setTaskSwitch(false)
                        }}
                    >
                        <h5 className='text-left py-3 cursor-pointer'>Current Task</h5>
                    </div>
                    <div className='shadow col-6 cursor-pointer btn'
                        onClick={() => {
                            setTaskSwitch(true)
                        }}
                    >

                        <h5 className='text-left py-3 cursor-pointer'>Completed Task</h5>
                    </div>
                </div>
                {taskSwitch ? (
                    <>

                        <div className='row m-3 shadow'>
                            <TaskCard completed={true} />
                        </div>
                        <div className='row m-3 shadow'>
                            <TaskCard completed={true} />

                        </div>
                        <div className='row m-3 shadow'>
                            <TaskCard completed={true} />

                        </div>
                    </>
                ) : (
                    <>

                        <div className='row m-3 shadow'>
                            <TaskCard />
                        </div>
                        <div className='row m-3 shadow'>
                            <TaskCard />
                        </div>
                        <div className='row m-3 shadow'>
                            <TaskCard />
                        </div>
                    </>
                )}





                <Button
                    className='shadow-lg position-fixed addTaskBtn px-5 mx-auto'
                    onClick={() => {
                        navigate('/Team/3')
                    }
                    } >+ Add Task</Button>





            </div>
        </>
    )
}
