import React from 'react'
import PageLinkButton from './PageLinkButton'

const ServiceCard = ( {tagline, content, button_text, page_dest} ) => {
  return (
    <div className='service-display-card border border-black'>
      <h2 className='service-card-tagline'>{tagline}</h2>
      <p className='service-card-content'>{content}</p>
      <PageLinkButton page_dest={page_dest}><p>{button_text}</p></PageLinkButton>

    </div>
  )
}

export default ServiceCard
