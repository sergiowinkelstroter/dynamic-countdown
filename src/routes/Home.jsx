import { useContext, useState } from "react";
import { CountdownContext } from "../context/CountdownContext";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      image,
      color,
    };

    setEvent(eventObject);

    navigate("/countdown");
  }

  return (
    <div className="home">
      <h2>Monte sua contagem regressiva!</h2>
      <form onSubmit={handleSubmit} className="countdown-form">
        <label>
          <span>Titulo:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo do evento"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            placeholder="Insira a URL da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            required
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <input type="submit" value="Criar" />
      </form>
    </div>
  );
};
