import { Title } from "../components/Title/Title";
import { Counter } from "../components/Counter/Counter";

import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";

import useCountdown from "../hooks/useCountDown";
import { Link, Navigate } from "react-router-dom";

export const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" replace />;

  let eventTitle = null;

  if (event.title) eventTitle = event.title;

  let eventColor = null;

  if (event.color) eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(`${event.date} 00:00:00`);

  return (
    <>
      <Title title={event.title} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
      <Link to={"/"}>Voltar</Link>
    </>
  );
};
