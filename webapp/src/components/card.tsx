import { Link } from "react-router";

type CardProps = {
  title: string;
  imgHref: string;
  link: string;
  color: string;
};

const Card: React.FC<CardProps> = ({ title, imgHref, link, color }) => {
  return (
    <div
      className="card"
      style={{ width: "18em", borderWidth: ".1em", borderColor: color }}
    >
      <Link to={link} style={{ textDecoration: "none", color: "black" }}>
        <img src={imgHref} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title" style={{ color: color }}>
            {title}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;
