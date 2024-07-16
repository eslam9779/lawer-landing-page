import React from 'react'
import victory from '../../Assets/victories.png'
import legalCases from '../../Assets/legalCases.png'
import arrow from '../../Assets/arrow.png'
import './mid_section_cases.css'
const MidSectionCases = () => {
    return (
        <div className='mid_section_cases container row mt-5'>

            <div className='mid_section_cases_p1 col-6'>
                <img src={victory} />
                <h3>Olve victorious Legal Cases</h3>
                <p>
                    Discover the impressive case studies of our successful legal battles,
                    where we have fought for constumers
                    and smaller parties against large organizations.
                </p>
               <div className='mid_section_cases_p1_btns'>
                    <button className='btn1'>Our areas of Law</button>
                    <p >New successes <img src={arrow}/></p>
               </div>
            </div>

            <div className='mid_section_cases_p2 col-6'>
                <img src={legalCases} />
            </div>

        </div>
    )
}

export default MidSectionCases
