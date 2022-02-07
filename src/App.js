import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ListShips from './Components/ships';
import ShipDetail from './Components/shipDetail';
import Header from './Components/Header';
import Button from './Components/Button';


function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Button/>} />  
        <Route path="/home" element={<Header/>} /> 
        <Route path="/list" element={<ListShips/>} /> 
         <Route path="/detail/:id" element={<ShipDetail/>} />
         </Routes>
      </Router>
        
    
    
   
  );
}

export default App;
