import React from 'react'

const { useState } = React;

export default function ChatHook() {
    const [value, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const updateValue = ({ target }) => setInputValue(target.value);
    const updateMessages = () => {
        if (!value) {
            return;
        }
        const time = new Date().toLocaleTimeString();
        const newMessage =
            <NewMessage key={time} message={value} timeStamp={time} />;

        setMessages(prevState => ([newMessage, ...prevState]));
        setInputValue('');
    }

    return (
        <>

            <div className="input-group chatBox col-12 position-fixed">
                <TextField handleOnChange={updateValue} value={value} />
                <button className="chat-btn--submit btn btn-primary" onClick={updateMessages}>Send</button>

            </div>
            <div className="col-12 m-3">
                {messages}
            </div>



        </>
    );
}

const TextField = ({ value, handleOnChange }) => (
    <textarea className="chat-textarea form-control" placeholder="Write your message" onChange={handleOnChange} value={value} />
)

const NewMessage = ({ message, timeStamp }) => (
    <div className="chat-message__container border border-primary rounded p-1 my-2">
        <div>{message}</div>
        <div>{timeStamp}</div>
    </div>
);