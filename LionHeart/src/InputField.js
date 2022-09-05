import React from 'react'

export default function InputField({ label, type, name, active = '', textArea = false, handleInputChange, setInputFields, inputFields }) {

    return (
        <div className='position-relative p-0'>
            <label htmlFor={name}>{label}</label>
            <input
                className={`input-field`}
                type={type}
                name={name}
                id={name}
                placeholder={`Enter ${label.toLowerCase()}...`}
                autoFocus={active === 'focused'}
                textarea={textArea ? 'textarea' : ''}
                onChange={handleInputChange}
            />
            <div className='focus-border position-absolute'></div>
        </div>
    )
}
