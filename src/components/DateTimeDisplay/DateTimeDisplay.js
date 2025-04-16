import React, { useState, useEffect } from 'react';
import styles from './DateTimeDisplay.module.scss'; 

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer); 
  }, []);

  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const dayOfWeek = daysOfWeek[currentTime.getDay()];
  const date = currentTime.toLocaleDateString(); 
  const time = currentTime.toLocaleTimeString(); 

  return (
    <div className = {styles.DateTimeDisplay__wrapper} >
      <p>{dayOfWeek}  {date}  {time}</p>
    </div>
  );
};

export default DateTimeDisplay;
