import React from 'react'
import ValueStatementCard from './ValueStatementCard'

const HomeValueStatements = () => {
  return (
    <div className='home-page-value-statements-section mt-5'>
       <ValueStatementCard>
        <p><strong>STUDENTS GAIN...</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </ValueStatementCard>

       <ValueStatementCard>
        <p><strong>LOCAL BUSINESSES GET...</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </ValueStatementCard>

       <ValueStatementCard>
        <p><strong>UNIVERSITIES ARE IMPROVED...</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </ValueStatementCard>
    </div>
  )
}

export default HomeValueStatements
