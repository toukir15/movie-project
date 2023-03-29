import React from "react";

const SingleCart = (props) => {
  const { description, movieName, poster, watchTime, imdbRating } = props.movie;

  return (
    <div className="flex justify-center">
      <div className="movie__cart card w-96 bg-base-100 shadow-xl mb-10">
        <div className="movie__poster  flex justify-center">
          <img className="w-3/12" src={poster} alt="" />
        </div>
        <h3 className="text-center text-4xl font-bold p-2">{movieName}</h3>
        <p className="text-center ">{description}</p>
        <div className="flex justify-around p-2 font-bold">
          <p>watch time: {watchTime}</p>
          <p>rating: {imdbRating}</p>
        </div>
        <div className="flex justify-center pb-4">
          <button
            onClick={() => props.handleWatchTime(watchTime)}
            className="btn btn-primary w-3/5"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
