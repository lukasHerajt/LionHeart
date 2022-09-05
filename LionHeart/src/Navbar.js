import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ReactComponent as HomeIcon } from './icons/HomeIcon.svg'
import { ReactComponent as HomeIconActive } from './icons/HomeActiveIcon.svg'
import { ReactComponent as ChatIcon } from './icons/ChatIcon.svg'
import { ReactComponent as ChatIconActive } from './icons/ChatActiveIcon.svg'
import { ReactComponent as TeamIcon } from './icons/TeamIcon.svg'
import { ReactComponent as TeamIconActive } from './icons/TeamActiveIcon.svg'
import { ReactComponent as MenuIcon } from './icons/MenuIcon.svg'


export default function Navbar() {
    const navigate = useNavigate()
    const [active, setActive] = React.useState(0)
    const width = window.innerWidth
    console.log('width: ', width)
    return (
        <>

            {width > 500 ? <div className="nav-div-top" /> : <div className="nav-div-bottom" />}
            <div className={`${(width > 500) ? 'top' : 'bottom'} navbar`}>

                {active === 0 ? <HomeIconActive
                    className='first active'
                    onClick={() => {
                        console.log('home clicked')
                        navigate('/Company')
                    }}

                />
                    :
                    <HomeIcon
                        className='first'
                        onClick={() => {
                            setActive(0)
                            console.log('home clicked')
                            navigate('/Company')
                        }}
                    />}

                {active === 1 ? <ChatIconActive
                    className='second active'
                    onClick={() => {
                        setActive(1)
                        console.log('home clicked')
                        navigate('/Chat')
                    }}

                />
                    :
                    <ChatIcon
                        className='second'


                        onClick={() => {
                            setActive(1)
                            console.log('chat clicked')
                            navigate('/Chat')
                            console.log('active: ', active)
                        }}
                    />}
                {active === 2 ? <TeamIconActive
                    className='third active'
                    onClick={() => {
                        setActive(2)
                        console.log('home clicked')
                        navigate('/Team')
                    }}

                />
                    :
                    <TeamIcon
                        className='third'

                        onClick={() => {
                            setActive(2)
                            console.log('home clicked')
                            navigate('/Team')
                        }}
                    />}
                <MenuIcon className='fourth' />
                <Outlet />
            </div>
        </>
    )
}
