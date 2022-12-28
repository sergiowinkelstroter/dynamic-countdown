import "./Title.css";

export const Title = ({ title, eventColor }) => {
  return (
    <h1 className="title" style={{ color: eventColor }}>
      {title}
    </h1>
  );
};
