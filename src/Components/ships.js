import React, {Fragment, useEffect, useState} from "react";
import "./ships.css"
import {Link} from "react-router-dom"
import Header from "./Header";

const ListShips = () => {

    const[ship, setShip] = useState([])
    const[next, setNext] = useState("")
    

    useEffect(() => {
        
        getShips()
    }, [])

    const getShips = async () => {
        const data = await fetch('https://swapi.py4e.com/api/starships')
        const ships = await data.json()
        const list = ships.results
        setNext(ships.next)

        setShip(list)
    }

    async function viewMore () {

        const nextShip = await fetch(next)
        const ships = await nextShip.json()
        const list = ships.results
       
       setNext(ships.next)
       setShip((prevInfo) => {

        return [
            ...prevInfo, ...list
        ]
       } ) 

    }

    return (
        <Fragment>
            <Header></Header>
            
            <ul class="shipsMap">
            {ship.map((item) => {
                const id = item.url.split("/")[5];
                return(
                    <div key={item.name} className="shipsList"> 
                        <Link to={`/detail/${id}`}>
                          <h4>{item.name}</h4>  <p>{item.model}</p>
                        </Link></div>)
                }
            )}
            </ul>
            { ship.next===null ? "": <button onClick={()=>viewMore ()} className="buttonView">View more</button> }
          
        </Fragment>
        )};

export default ListShips;
