import React from 'react'
import ServiceCard from './ServiceCard'

const ServicesOfferedSection = () => {
  return (
    <div className='services-offered-section flex flex-row flex-wrap md:flex-nowrap'>
        <ServiceCard tagline={"Get a FREE Security Audit!"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} button_text={"Request"} page_dest={'/client-portal'} />
        <ServiceCard tagline={"Get involved as a student!"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} button_text={"Join our mailing list"} page_dest={'/'} />
    </div>
  )
}

export default ServicesOfferedSection
