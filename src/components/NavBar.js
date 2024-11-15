import React from 'react'
import PageLinkButton from './PageLinkButton'

const NavBar = () => {
  return (
    <div className="navbar flex flex-row w-full p-4">
        <PageLinkButton page_dest={'/'}>
            <p className='navbar-home-link-text'>Home</p>
        </PageLinkButton>

        <PageLinkButton page_dest={'/services'}>
            <p className='navbar-services-link-text'>Services</p>
        </PageLinkButton>

        <PageLinkButton page_dest={'/client-portal'}>
            <p className='navbar-client-portal-link-text'>Client Portal</p>
        </PageLinkButton>

        <PageLinkButton page_dest={'/meet-team'}>
            <p className='navbar-team-link-text'>Meet The Team</p>
        </PageLinkButton>
    </div>
  )
}

export default NavBar
