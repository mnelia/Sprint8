import React, { Fragment } from 'react';
import ListShips from './ships';
import { Link } from "react-router-dom"

const Button = ()  =>{
    const mainShips = () => {
        return <ListShips />
    };
  return (
   <Fragment>
    <div className='welcomeButton'>
          <p>WELCOME</p>
      
          <Link to={"/list"}>
              <button className='buttonGo'>GO TO THE STAR WARS WEB PAGE</button>
          </Link>
      </div>
      </Fragment>
    )
}

export default Button;
