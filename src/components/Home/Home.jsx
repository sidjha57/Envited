import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css'

export default function Home() {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/create");
  }
  return (
    <div className='Home'>
      <div className='Box'>
        <div className='Box1'>
          <h1 className='Heading Head1'>Imagine if</h1>
          <h2 className='Subheading'>Snapchat</h2>
          <h1 className='Heading Head2'>had events.</h1>
        </div>
        <p className='Description'>Easily host and share events with your friends across any social media.</p>
      </div>

      <img src="./assets/Landing_page.svg" alt="Create a event" className='Image'/>
      <button onClick={handleCreate} className="Create">Create my event</button>
    </div>
  )
}
