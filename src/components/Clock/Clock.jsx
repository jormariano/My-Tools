import './Clock.css'
import { useState } from 'react';

const Clock = () => {

  const time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();

    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div className='clock-container'>
      <h2>{currentTime}</h2>
    </div>
  )
}

export default Clock