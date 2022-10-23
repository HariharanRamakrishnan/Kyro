import ShowCard from "./ShowCard";
import TodayShowCard from "./TodayShowCard";

const TodayStreaming = ({ shows }) => (
  <div className="cardswrapper">
    {shows.map((show) => (
      <TodayShowCard key={show.id} show={show} />
    ))}
  </div>
);
export default TodayStreaming