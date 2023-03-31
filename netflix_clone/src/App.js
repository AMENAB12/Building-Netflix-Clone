import './App.css';
import Row from './Components/Row/Row';
import request from "./request";
function App() {
  return (
    <div className="App">
     <h1>Hello App</h1>
     <Row  
     title="Netflix Original" 
     fetchURL={request.fetchNetflixOriginals}
     />
     <Row  
     title="Trending Now" 
     fetchURL={request.fetchTrending}
     />
    </div>
  );
}

export default App;
