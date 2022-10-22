import { Link } from "react-router-dom";

const ShowCard = ({ show: { image, name, rating, id, premiered } }) => {
  return (
    <Link to={`shows/${id}`} className="showcardlink">
      <div className="card" onClick={() => console.log(id)}>
        <div className="imagewrapper">
          <img src={image.medium} alt={name} />
        </div>

        <div className="cardcontent">
          <div className="cardtitile">
            {name} ({premiered.split("-")[0]})
          </div>
          <div className="rating">{rating.average}</div>
        </div>
      </div>
    </Link>
  );
};

export default ShowCard;
