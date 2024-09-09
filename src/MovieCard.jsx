/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import MovieDetails from "./MovieDetails";
import Rating from "./Rating";
import tag from "./assets/tag.svg";
import { getImageUrl } from "./utils/cine-utility";
import { MovieContext } from "./context";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

  const handleCloseMovieDetails = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleModalClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = state.cartData.find((item) => item.id === movie.id);

    if (found) {

      toast.error(`The movie ${movie?.title} Already in the cart`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {

     dispatch({
       type: "ADD_TO_CART",
       payload: {
            ...movie
       }
     })
      setShowModal(false);
      // toast.success(`Added the movie ${movie?.title} successfully`);
      toast.success(`Added the movie ${movie?.title} successfully`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
  };

  return (
    <>
      {showModal && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseMovieDetails} onAddCart={handleAddToCart}/>
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleModalClick(movie)} href="#">
          <img
            className="w-full object-cover"
            src={getImageUrl(movie?.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie?.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie?.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie?.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={tag} alt="" />
              <span>$100 | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
