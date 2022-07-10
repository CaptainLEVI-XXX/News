import './App.css';
import Navbar from './components/Navbar';
import Newsitem from './components/Newsitem';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
     <Navbar/>
     <Routes>
        <Route  path="/" element={ < Newsitem key ="general"  pageSize={6} country={"in"} category={"general"}/>}/>
        <Route  path="/business" element={ < Newsitem key="business"  pageSize={6} country={"in"} category={"business"}/>}/> 
        <Route  path="/entertainment" element={ < Newsitem key="entertainment"  pageSize={6} country={"in"} category={"entertainment"}/>}/> 
        <Route  path="/health" element={ < Newsitem key="health"  pageSize={6} country={"in"} category={"health"}/>}/>
        <Route  path="/science" element={ < Newsitem key="science"  pageSize={6} country={"in"} category={"science"}/>}/>
        <Route  path="/sports" element={ < Newsitem key="sports"  pageSize={6} country={"in"} category={"sports"}/>}/>
        <Route  path="/technology" element={ < Newsitem key="technology"  pageSize={6} country={"in"} category={"technology"}/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
