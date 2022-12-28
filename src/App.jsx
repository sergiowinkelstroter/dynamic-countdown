import { Counter } from "./components/Counter/Counter";
import { Title } from "./components/Title/Title";

import NewYear from "./assets/newyear.jpg";

import "./App.css";
import useCountDown from "./hooks/useCountDown";

export const App = () => {
  const [day, hour, minute, second] = useCountDown("Jan 1, 2023 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2023" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
};
