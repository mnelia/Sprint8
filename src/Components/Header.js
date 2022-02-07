import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import LogIn from "./logIn";
import Modal from 'react-modal'

const customStyles = {
  content: {
      backgroundColor: '#696969',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }, overlay:{backgroundColor: "#01010101"},
};

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      /*modal de inicio de sesion*/
      <>
        <button onClick={handleShow} className="modalButton">
          LOG IN
        </button>
        <Modal
           isOpen={show}
           contentLabel="Minimal Modal Example"
           style={customStyles}
        >
        <LogIn />
          <button onClick={handleClose} className="closeModal">Close Modal</button>
        </Modal>
      </>
    );
  }
  
const Header = () => {

  return (
    <Fragment>
      <nav className="navBar">
        <div className="firstContainer">
          <div className="starWarsLogo">
            <img
              className="mainStarWarsLogo"
              src={process.env.PUBLIC_URL + '/images/starWars.jpg'}
              alt="Star Wars logo TM"
            />
          </div>
          <div className="logins">
            <Example />
            <button>
              <Link to="/SignUp">SIGN UP</Link>
            </button>
          </div>
        </div>
        <div className="bordeMenuPage">
          <button>
            <Link to="/home">HOME</Link>
          </button>
          <button>
            <Link to="/list">STARTSHIPS</Link>
          </button>
        </div> 
      </nav>
    </Fragment>
  );
};

export default Header;