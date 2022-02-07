import React, {Fragment, useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";


const ShipDetail = () => {

    const {id} = useParams()

    const[item, setItem] = useState([])
    //async await llamada a cada detalle de nave
    const getShips = async () => {
        const data = await fetch("https://swapi.py4e.com/api/starships/"+id+"/")
        const ships = await data.json()
        setItem(ships)
    }

    useEffect(() => {
        
        getShips()
    }, [])
    
  return (
      <Fragment>
      <Header></Header>
      <div className="shipDetailFile">
        <h2>Name: {item.name}</h2>
        <p> <img  src={process.env.PUBLIC_URL + '/images/nave.jpg'} class="nave" alt= "img" /> </p>
        <table>
          <tr>
            <td>Model: {item.model}</td>
            <td>Manufacturer: {item.manufacturer}</td>
            <td>Length: {item.length}</td>
          </tr>
          <tr>
            <td>Crew: {item.crew}</td>
            <td>Atmosphere speed: {item.max_atmosphering_speed}</td>
            <td>Cost in credits: {item.cost_in_credits}</td>
          </tr>
        </table>
      </div>
    </Fragment>
     )
   };
   
   export default ShipDetail;