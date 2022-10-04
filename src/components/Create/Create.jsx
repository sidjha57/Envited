import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Create.css'

export default function Create() {
  const navigate = useNavigate();
  const handleEvent = () => {
    navigate("/event");
  }
  
  return (
      <div className="container">
      <h1 className='Heading'>Create Event</h1>

    <form className="createForm">
    <div className="row">
      <div className="col-25">
        <label htmlFor="fname">Event Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Event Name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="lname">Host Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Host Name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="Start">Start Date</label>
      </div>
      <div className="col-75">
        <input type="date" id="sdate" name="Sdate"/>
        <input type="time" id="stime" name="Stime"/>
      </div>
      <div className="col-25">
        <label htmlFor="End">End Date</label>
      </div>
      <div className="col-75">
        <input type="date" id="edate" name="Edate"/>
        <input type="time" id="etime" name="Etime"/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="location">Location</label>
      </div>
      <div className="col-75">
        <input type="text" id="street" name="street" placeholder="Street Name.."/>
        <input type="text" id="suburb" name="suburb" placeholder="Subrub Name.."/>
        <input type="text" id="state" name="state" placeholder="State Name.."/>
        <input type="number" id="postcode" name="postcode" placeholder="4XXX"/>

      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="eventPicture">Event Picture</label>
      </div>
      <div className="col-75">
        <input type="file" id="picture" name="Picture"/>
      </div>
    </div>
    <br/>
    <div className="row">
      <input type="next" value="Next" onClick={handleEvent}/>
    </div>
    </form>
  </div>
  
  )
}
