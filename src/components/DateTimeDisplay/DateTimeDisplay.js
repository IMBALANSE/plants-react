import React, { useState, useEffect } from 'react';
import './DateTimeDisplay.css'; // Импортируем файл стилей

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
  const date = currentTime.toLocaleDateString();
  const time = currentTime.toLocaleTimeString();

  return (
    <div className = "DateTimeDisplay__wrapper flex__row">
      <p>{dayOfWeek}  {date}  {time}</p>
    </div>
  );
};

export default DateTimeDisplay;
