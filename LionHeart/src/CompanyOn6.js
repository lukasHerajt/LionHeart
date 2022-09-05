import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLogo } from './icons/ArrowIcon6.svg'


export default function Company6() {
    const navigate = useNavigate()
    const [inputFields, setInputFields] = React.useState({
        companyDescription: '',
        uxui: false,
        digitalMarketing: false,
        seo: false,
        advertising: false,
        backed: false,
        fronted: false,
        design: false,
        analytics: false,
        blockchain: false,
        googleAds: false,
        sem: false,
        content: false,
        facebookAds: false,
        YoutubeAds: false,
        advertisingteen: false,
        checkboxFifteen: false,
    })

    const handleInputChange = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.id]: e.target.checked,
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

                <h1 className='text-center py-5 col'>What skillsets are you looking for?</h1>
            </div>

            <div className='row pb-5 text-center'>
                <label className='text-left p-2' htmlFor='companyDescription'>Briefly describe your company</label>
                <div className='col'>
                    <textarea className="companyDescription shadow-sm p-2" onChange={(e) => setInputFields({ ...inputFields, companyDescription: e.target.value })} name='companyDescription' placeholder='Enter your text here...' rows='3'></textarea>
                </div>
            </div>




            <form className="container-checkboxes">
                <ul className="ks-cboxtags">
                    <li><input checked={inputFields.uxui} onChange={handleInputChange} type="checkbox" id="uxui" /><label htmlFor="uxui">UX/UI</label></li>
                    <li><input checked={inputFields.digitalMarketing} onChange={handleInputChange} type="checkbox" id="digitalMarketing" /><label htmlFor="digitalMarketing">Digital Marketing</label></li>
                    <li><input checked={inputFields.seo} onChange={handleInputChange} type="checkbox" id="seo" /><label htmlFor="seo">SEO</label></li>
                    <li><input checked={inputFields.advertising} onChange={handleInputChange} type="checkbox" id="advertising" /><label htmlFor="advertising">Advertising</label></li>
                    <li><input checked={inputFields.backed} onChange={handleInputChange} type="checkbox" id="backed" /><label htmlFor="backed">Backend Dev</label></li>
                    <li><input checked={inputFields.frontend} onChange={handleInputChange} type="checkbox" id="backed" /><label htmlFor="frontend">Frontend Dev</label></li>
                    <li><input checked={inputFields.design} onChange={handleInputChange} type="checkbox" id="design" /><label htmlFor="design">Design</label></li>
                    <li><input checked={inputFields.analytics} onChange={handleInputChange} type="checkbox" id="analytics" /><label htmlFor="analytics">Analytics</label></li>
                    <li><input checked={inputFields.blockchain} onChange={handleInputChange} type="checkbox" id="blockchain" /><label htmlFor="blockchain">Blockchain</label></li>
                    <li><input checked={inputFields.googleAds} onChange={handleInputChange} type="checkbox" id="googleAds" /><label htmlFor="googleAds">Google Ads</label></li>
                    <li><input name='' checked={inputFields.sem} onChange={handleInputChange} type="checkbox" id="sem" /><label htmlFor="sem">SEM</label></li>
                    <li className="ks-selected"><input checked={inputFields.content} onChange={handleInputChange} type="checkbox" id="content" /><label htmlFor="content">Content</label></li>
                    <li><input checked={inputFields.facebookAds} onChange={handleInputChange} type="checkbox" id="facebookAds" /><label htmlFor="facebookAds">Facebook Ads</label></li>
                    <li><input checked={inputFields.YoutubeAds} onChange={handleInputChange} type="checkbox" id="YoutubeAds" /><label htmlFor="YoutubeAds">Youtube Ads</label></li>

                </ul>

            </form>

            <div className='row pb-3 pt-2'>
                <div className='col'>
                    <ArrowLogo
                        className='arrowLogo'
                        onClick={() => {
                            console.log('state: ', inputFields)
                            navigate(`/Company`)
                        }} />
                </div>
            </div>
        </div>
    )
}
