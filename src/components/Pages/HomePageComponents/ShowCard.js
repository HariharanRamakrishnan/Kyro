import { Link } from "react-router-dom";

const ShowCard = ({ show: { image, name, rating, id, premiered } }) => {
  return (
    <div className="d-flex justify-content-start m-3">
      <div className="card" onClick={() => console.log(id)}>
        <Link to={`shows/${id}`} className="showcardlink">
          
            <div className="imagewrapper">
              <img src={image.medium} alt={name} />
            </div>

            <div className="cardcontent">
              <div className="cardtitile">
                {name} ({premiered.split("-")[0]})
              </div>
              <div className="rating">{rating.average}</div>
            </div>
          
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
