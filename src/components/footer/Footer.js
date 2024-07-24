import React from 'react'
import './footer.css'
import logo from '../../Assets/Logo DEMO.png'
import facebook from '../../Assets/facebook.png'
import instagram from '../../Assets/instagram.png'
import linkedin from '../../Assets/linkedin.png'
import youtube from '../../Assets/youtube.png'

const Footer = () => {


    let links = [
        {
            header: "Useful Links",
            link: ["About Us", " Contact Us", "FAQs", "Terms of Service", "Privacy Policy"]
        },
        {
            header: "Careers",
            link: ["Blog", "Press", "Parthships", "Support", " Help Center"]
        },
        {
            header: "Resources",
            link: ["Events", "Community", "Social Media", "Newsletter", "Subscribe"]
        }
    ]

    return (
        <div className='footer container'>

            <div className='footer_links '>
                {links.map((item, index) =>
                    <div className='footer_header' key={index}>
                        <h5>{item.header}</h5>
                        <ul>
                            {item.link.map((links, index2) =>
                                <li key={links}><a href='#'>{links}</a></li>
                            )}
                        </ul>

                    </div>
                )}
                <div className='subscribe'>
                    <h5>Subscribe</h5>
                    <p>Join our community to receive updates </p>
                    <div className='subscribe_inputs'>
                        <input type='email' placeholder='Enter your email' />
                        <button >Subscribe</button>

                    </div>
                    <p className='privacy_agree'>By subscribing, you agree to our Privacy Policy </p>
                </div>
            </div>

            <hr  />
            
            <div className='social_media '>
                <div>
                    <img src={logo} />
                </div>

                <div className='social_media_icons'>
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={linkedin} />
                    <img src={youtube} />

                </div>

            </div>


            <hr  />
            
            <div className='footer_end '>
                <div className='footer_end_links'>
                    <p>Privacy Policy </p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                </div>
                <div>
                    <p>© 2024 James Alonso. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
