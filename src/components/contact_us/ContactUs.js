import React from 'react'
import './contactUs.css'
import contact from '../../Assets/contact.png'
import arrow from '../../Assets/arrow.png'

const ContactUs = () => {
    return (
        <div className='contact_us container '>
            <div className='contact_us_text '>
                <h1>Contact Us for Legal Assistance</h1>
                <p>Experienced lawyers ready to fight for your rights</p>
                <div className='mid_section_cases_p1_btns'>
                    <button className='btn1'>Our areas of Law</button>
                    <p >New successes <img src={arrow}/></p>
               </div>
            </div>
            <div className='contact_us_img'>
                <img src={contact}/>
            </div>
        </div>
    )
}

export default ContactUs
