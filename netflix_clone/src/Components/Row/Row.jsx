import React ,{useState,useEffect} from 'react'
import axios from "../../axios"

const base_url = "http://image.tmdb.org/t/p/original/"
function Row({title,fetchURL}) {

const [movies, setMovies] = useState([]);

useEffect(() => {
    async function fetchData(){
const request = await axios.get(fetchURL);
// console.log(request)
setMovies(request.data.results)
return request;
    } 
   fetchData();
}, [fetchURL]);
console.log(movies)

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters' >
{movies.map((singleMovie, i)=>{

})}
        </div>


    </div>
  )
}

export default Row