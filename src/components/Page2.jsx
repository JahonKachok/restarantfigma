import React from 'react'
import dish1 from '..//images/dish1.svg'
import dish2 from '..//images/dish2.svg'

export default function Page2() {
  return (
    <div className='page-2'>
        <div className="page-2-container">
            <div className="page-2-title">
                <h4> Offers</h4>
                <h1>Our Offer dishes</h1>
                <p>Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now the dishes are in offers use it based on hunger.</p>
            </div>
            <div className="page-2-dishes d-flex justify-content-center align-items-center flex-column flex-md-row gap-4 flex-wrap  ">
              <img src={dish1} alt="" />
                <img src={dish2} alt="" />
                </div>
        </div>

    </div>
  )
}
