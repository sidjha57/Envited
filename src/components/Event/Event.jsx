import React from 'react'
import './Event.css'

export default function Event() {
  return (
    <div className='Event'>
      <img src="./assets/Birthday_cake.png" alt="Birthday_cake" className='EventPicture'/>
      <h1 className='EventName'>Birthday Bash</h1>
      <p className='HostedBy'>Hosted by Elysia</p>
      <img src="./assets/calendar.png" className="calendar"/>
      <h4 className='StartTime'>18 August 6:00 PM</h4>
      <p className='EndTime'>to 19 August 1:00PM UTC + 10</p>
      <img src="./assets/location.png" className="location"/>
      <h4 className='Location'>Street name</h4>
      <p className='LocationDetails'>Suburb, State, Postcode</p>
    </div>
  )
}
