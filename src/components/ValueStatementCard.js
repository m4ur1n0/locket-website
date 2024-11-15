import React from 'react'

const ValueStatementCard = ({children}) => {
  return (
    <div className='value-statement-card p-2 m-2 w-[50rem] h-[4rem] border border-black'> {/* FIX WIDTH AND HEIGHT */}
      {children}
    </div>
  )
}

export default ValueStatementCard
