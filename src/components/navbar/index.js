import React from "react";
import {Link} from "react-router-dom";

function navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link to= "/"className="nav-link">Alan Fernandes<span className="sr-only">(current)</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to= "/"className="nav-link">Home/About<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link to= "/contact"className="nav-link">Contact<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link to= "/portfolio"className="nav-link">Portfolio<span className="sr-only">(current)</span></Link>
            </li>
          </ul>

        </div>
      </nav>
    )
}

export default navbar