import React from 'react'
import './mid_section_state.css'
import img1 from '../../Assets/Source - Asset FP.png'
import img2 from '../../Assets/Source FP.png'
const MidSectionState = () => {
    return (
        <div className='MidSectionState'>
            <div className='sec_p1'>

                <div className='d-flex justify-content-between align-items-end mt-3'>
                    <div>
                        <h3>Estate Planning and Probate</h3>
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                </div>

                <div className='d-flex justify-content-between align-items-start mt-2'>

                    <div>
                        <p>
                            Our focus areas encompass cases involving emission scandals,
                            data breaches, online gambling establishments.
                        </p>
                    </div>

                    <div>
                        <button >Check affectedness now</button>

                    </div>
                </div>
            </div>

            <div className='sec_p2'>
                <div >
                    <img src={img2} />
                    <h3>Immigration Law</h3>
                    <p>We excel in advocating for consumers and smaller
                        entities</p>
                    <button >Check affectedness now</button>

                </div>
            </div>
        </div>
    )
}

export default MidSectionState
