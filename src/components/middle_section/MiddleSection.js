import React from 'react'
import './middle_section.css'
import MidSectionState from '../../sections/mid_section_p1/MidSectionState'
import MidSectionCases from '../../sections/mid_section_p2/MidSectionCases'
const MiddleSection = () => {
  return (
    <div className='container middle_section'>
       <MidSectionState/>
       <MidSectionCases/>
    </div>
  )
}

export default MiddleSection
