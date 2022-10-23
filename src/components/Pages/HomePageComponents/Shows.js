import ShowCard from "./ShowCard";

const Shows = ({ shows }) => (
  <div className="cardswrapper">
    {shows.map((show) => (
      <ShowCard key={show.id} show={show} />
    ))}
  </div>
);

export default Shows;
