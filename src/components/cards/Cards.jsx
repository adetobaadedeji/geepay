import "./Cards.scss";
import { cards } from "../../utils/data";

const Cards = () => {
  return (
    <section className="cards">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </section>
  );
};

const Card = ({
  Icon,
  background,
  value,
  title,
  Arrow,
  percent,
  graph,
  color,
}) => {
  return (
    <section className="card">
      <div className="card__icons">
        <img src={Icon} alt="icon" />
        <img src={graph} alt="icon" />
      </div>
      <p className="card__title">{title}</p>
      <p className="card__value">{value}</p>
      <div className="card__analytics">
        <span
          className="card__analytics--percent"
          style={{ color: color, backgroundColor: background }}
        >
          <img src={Arrow} alt="icon" />
          {percent}
        </span>
        <span className="card__analytics--prev">vs. previous month</span>
      </div>
    </section>
  );
};

export default Cards;
