import { useEffect } from 'react'

const Show = ({ show, getShow, match }) => {
  useEffect(() => {
    getShow(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    summary,
    image,
    rating,
    genres,
    language,
    rumtime,
    premiered
  } = show;

  return (
    <div>
      <h1>{name}</h1>
      {/* <img src={image.medium} alt={name} /> */}
      <div>{summary}</div>
      {/* <ul>
        {genres.map(genre => (
          <li>{genre}</li>
        ))}
      </ul> */}
      <p>{premiered}</p>
      {/* <p>{rating.average}</p> */}
      <p>{language}</p>
    </div>
  );
};

export default Show