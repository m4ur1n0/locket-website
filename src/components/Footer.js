import React from 'react'

const Footer = () => {
  return (
    <div className='site-footer mt-20'>
      <div className='footer-site-links flex flex-row flex-wrap md:flex-nowrap'>
        <div className='footer-site-links-lhs flex flex-col m-5'>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
        </div>

        <div className='footer-site-links-middle flex flex-col m-5'>
            <p>Link 5</p>
            <p>Link 6</p>
            <p>Link 7</p>
        </div>

        <div className='footer-socials-links flex flex-col m-5'>
            <a href='https://www.instagram.com/safesecurity.nu/' target='_blank'>Instagram</a>
            <a href='https://www.linkedin.com/company/safe-security-nu/posts/?feedView=all' target='_blank'>LinkedIn</a>
            <a href='https://www.google.com' target='_blank'>Mail (someday)</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
