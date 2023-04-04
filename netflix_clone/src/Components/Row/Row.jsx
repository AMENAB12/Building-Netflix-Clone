import React ,{useState,useEffect} from 'react'
import axios from "../../axios"
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"; 

const base_url = "http://image.tmdb.org/t/p/original"
function Row({title,fetchURL, isLargeRow}) {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");

useEffect(() => {
    async function fetchData(){
const request = await axios.get(fetchURL);
// console.log(request)
setMovies(request.data.results)
return request;
    } 
   fetchData(); 
}, [fetchURL]);

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    movieTrailer(movie?.original_name || movie?.title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  }
};

// console.log(movies)
  return (
    <div className="row">
        <h1>{title}</h1>
        <div className="row__posters" >

{movies.map((singleMovie,i)=>(
<img 
className={`row__poster ${isLargeRow && "row__posterLarge"}`}
key={singleMovie.id}
onClick={() => handleClick(movies)}
src={`${base_url}${isLargeRow ? singleMovie.poster_path : singleMovie.backdrop_path}`} 
alt={singleMovie.name}

 />)
)}
</div>

<div className="row__youtube">
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>

</div>
  )
}

export default Row