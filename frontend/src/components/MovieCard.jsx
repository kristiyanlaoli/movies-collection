/* eslint-disable react/prop-types */
const GENRES = {
  1: "Action",
  2: "Commedy",
  3: "Drama",
  4: "Sci-Fi",
  5: "Animation",
};

const MovieCard = ({ title, director, summary, genres, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className="bg-gray-900 m-2 p-2 rounded-md"
    >
      <h2 className="font-bold text-red-500 text-base">{title}</h2>
      <p className="text-slate-300 text-sm">{director}</p>
      <p className="mt-2 text-slate-500">{summary}</p>
      <div className="mt-2 flex gap-1 justify-end text-xs text-red-500">
        {genres.map((genre) => (
          <p
            key={genre}
            className="border-[0.3px] border-red-500 p-0.5 rounded-md"
          >
            {GENRES[genre]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
