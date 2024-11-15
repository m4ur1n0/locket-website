import React from 'react'
import { useRouter } from 'next/router'

const PageLinkButton = ({page_dest, children}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(page_dest);
    }

  return (
    <div className='page-link-button border-black p-4 cursor-grab' onClick={handleClick}>
      {children}
    </div>
  )
}

export default PageLinkButton
