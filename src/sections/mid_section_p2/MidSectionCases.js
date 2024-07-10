import React from 'react'
import victory from '../../Assets/victories.png'
import legalCases from '../../Assets/legalCases.png'
const MidSectionCases = () => {
    return (
        <div className='mid_section_cases container row mt-5'>

            <div className='mid_section_cases_p1 col-6'>
                <img  src={victory}/>
                <h3>Olve victorious Legal Cases</h3>
                <p>
                    Discover the impressive case studies of our successful legal battles, 
                    where we have fought for constumers 
                    and smaller parties against large organizations.
                    </p>
                <button>Our areas of Law</button>
                <button>New successes</button>
            </div>

            <div className='mid_section_cases_p1 col-6'>
                    <img src={legalCases} />
            </div>

        </div>
    )
}

export default MidSectionCases
