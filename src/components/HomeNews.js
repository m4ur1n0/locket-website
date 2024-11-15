import React from 'react'
import Carousel from './Carousel'

const HomeNews = () => {
  return (
    <div className='home-news-carousel-and-quote-section flex flex-row flex-wrap md:flex-nowrap mt-5'>
        <Carousel><h1>CAROUSEL OF NEWS HERE</h1></Carousel>
      <h1>We're always taking BIG steps towards our goals.</h1>
    </div>
  )
}

export default HomeNews
