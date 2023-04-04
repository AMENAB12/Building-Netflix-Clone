import Row from './Components/Row/Row';
import requests from "./request";
import "./App.css"
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
function App() {
  return (
    <div className="App">
     {/* <h1></h1> */}
     <Nav/>
     <Banner/>
     <Row  
     title="Netflix Original" 
     fetchURL={requests.fetchNetflixOriginals}
     isLargeRow
     />
     <Row  
     title="Trending Now" 
     fetchURL={requests.fetchTrending}
     />
     <Row  
     title="Top Rated Movie" 
     fetchURL={requests.fetchTopRatedMovies}
     />
     <Row  
     title="Action Movies" 
     fetchURL={requests.fetchActionMovies}
     />
     <Row  
     title="Comedy Movies" 
     fetchURL={requests.fetchComedyMovies}
     />
     <Row  
     title="Horror Movies" 
     fetchURL={requests.fetchHorrorMovies}
     />
     <Row  
     titlere="Romance Movies" 
     fetchURL={requests.fetchRomanceMovies}
     />
     <Row  
     title="Documentary Movies" 
     fetchURL={requests.fetchDocumentaries}
     />
    </div>
  );
}

export default App;
