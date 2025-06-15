import { Link } from "react-router";

type CardProps = {
  title: string;
  imgHref: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, imgHref, link }) => {
  return (
    <div className="card">
      <img src={imgHref} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={link}>Go somewhere</Link>
      </div>
    </div>
  );
};

export default Card;
