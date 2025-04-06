import React, { useState, useEffect } from 'react';
// import './DateTimeDisplay.scss'; // Импортируем файл стилей
import styles from './DateTimeDisplay.module.scss'; 

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Обновляем время каждую секунду

    // Очистка таймера при размонтировании компонента
    return () => clearInterval(timer); 
  }, []);

  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const dayOfWeek = daysOfWeek[currentTime.getDay()];
  const date = currentTime.toLocaleDateString(); // Метод возв Дату в России: "02.03.2025", в США: "3/2/2025"
  const time = currentTime.toLocaleTimeString(); // ... время "15:30:45" (для русской локали), "3:30:45 PM" (для американской)

  return (
    <div className = {`${styles.DateTimeDisplay__wrapper} ${styles.DateTimeDisplay__wrapper_row}` } >
      <p>{dayOfWeek}  {date}  {time}</p>
    </div>
  );
};

export default DateTimeDisplay;
