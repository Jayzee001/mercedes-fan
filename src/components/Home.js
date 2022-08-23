import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./inde.css"
import logis from './pix/logis.png'
// import johannas from './pix/johannas.jpg'
// import Benz from './Benz';
// import {Link} from 'react-router-dom'
// import Background from "./components/Me";




export default class Home extends Component {

render() {
    return (
        <div className="logo">
            <div className="log">
                <Link to="/">
                    <img src={logis} alt="logo" />
                </Link>
                {/* <ul><li><Link to="/Benz">
                    clickhere
                </Link></li></ul> */}
            </div>
        </div>
    );
}
}


