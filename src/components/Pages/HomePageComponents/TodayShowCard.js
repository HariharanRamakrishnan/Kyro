import { Link } from "react-router-dom";

const TodayShowCard = ({ show: { show, id} }) => {
  return (
    <Link to={`shows/${id}`} className="showcardlink">
      <div className="d-flex justify-content-start m-3">
        <div className="card">
          <div className="imagewrapper">
            <img src={show.image.medium} alt={show.name} />
          </div>

          <div className="cardcontent">
            <div className="cardtitile">
              {show.name} ({show.premiered.split("-")[0]})
            </div>
            <div className="rating">{show.rating.average}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TodayShowCard