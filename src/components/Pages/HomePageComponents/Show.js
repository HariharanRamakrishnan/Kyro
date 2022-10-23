import { useEffect } from "react";

const Show = ({ show, getShow, match }) => {
  useEffect(() => {
    getShow(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { name, summary, image, rating, genres, language, rumtime, premiered } =
    show;

  const actualRuntime = (rumtime) => {
    if(rumtime !== null){ return rumtime}
    else { return "Not available"}
  }

  return (
    <div>
      <h1>{name}</h1>
      {<img src={image.medium} alt={name} />}
      <div>{summary}</div>
      { <ul>
        {genres.map(genre => (
          <li>{genre}</li>
        ))}
      </ul> }
      <p>{premiered}</p>
      <p>actualRuntime</p>
      {<p>{rating.average}</p>}
      <p>{language}</p>
      <button> Add to Watch List</button>
    </div>
  );
};

export default Show;
