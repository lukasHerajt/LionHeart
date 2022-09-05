import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import Chat from './Chat'
import InputField from './InputField'
import { ReactComponent as Icon } from './icons/CoHomeIcon1.svg'
// import { Chat } from '@material-ui/icons'
// import { StreamChat } from 'stream-chat'
// import { StreamChat, ChannelList, Chat, Channel, Window, ChannelHeader, MessageList, MessageInput, Thread, ChannelListMessenger, ChannelPreviewMessenger, TypingIndicator, MessageInputFlat, MessageSimple } from 'stream-chat-react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
// import { TextInput } from "./TextInput.js";
// import { MessageLeft, MessageRight } from "./Message";


export default function CoChat() {

    const navigate = useNavigate()
    const width = window.innerWidth
    return (
        <>

            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-auto main-container-wNav`}>

                <div className='row'>

                    <h5 className='text-left py-3 col shadow-sm'>Apprentices</h5>
                </div>
                <div className='row'>
                    <Chat />

                </div>
            </div>
        </>
    )
}
