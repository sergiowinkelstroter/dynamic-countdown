import { useState } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const countdown = () => {
    const countDate = new Date(date).getTime();

    const now = new Date().getTime();

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(gap / day);
    const hourNumber = Math.floor((gap % day) / hour);
    const minuteNumber = Math.floor((gap % hour) / minute);
    const secondNumber = Math.floor((gap % minute) / second);

    if (dayNumber <= 9) {
      setDay(`0${dayNumber}`);
    } else {
      setDay(dayNumber);
    }
    if (hourNumber <= 9) {
      setHour(`0${hourNumber}`);
    } else {
      setHour(hourNumber);
    }
    if (minuteNumber <= 9) {
      setMinute(`0${minuteNumber}`);
    } else {
      setMinute(minuteNumber);
    }
    if (secondNumber <= 9) {
      setSecond(`0${secondNumber}`);
    } else {
      setSecond(secondNumber);
    }
  };

  setInterval(countdown, 1000);

  return [day, hour, minute, second];
};

export default useCountdown;
