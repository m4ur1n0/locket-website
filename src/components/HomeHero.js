import React from 'react'
import PageLinkButton from './PageLinkButton'


const HomeHero = () => {
  return (
    <div className='home-hero-section h-5/6 border border-black'>
      <div className='fade-in-text-box'>
        <h1 className='home-hero-title'>Locket</h1>
        <h2 className='home-one-liner'>Where security clicks with people.</h2>
      </div>
      
      <PageLinkButton page_dest={'/client-portal'}>
        <h2>Get Involved!</h2>
      </PageLinkButton>
    </div>
  )
}

export default HomeHero
