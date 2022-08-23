import React,{ Component} from 'react'
import './inde.css'
// import Home from './Home';

import {Link} from 'react-router-dom'




export default class NavBar extends Component {
    render() {

        return (
            <div className="nav">
                    <nav>
                    <div className="container">
                        <div className="subco">

                        <ul>
                            <li>
                                <Link to="/Lang">
                                    Deutech|English
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/about">
                                    Provider/Privacy
                                </Link>
                            </li>
                        </ul>
                        </div>
                        <div className="subcon">
                        <ul>
                            <li>
                                <Link to="/about">
                                    Search
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/store">
                                    Login
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="lownav">
                    <ul>
                        <li>
                            <Link to="/culture">
                                    Art & Culture
                                </Link>
                            </li>
                    </ul>
                    <ul>
                            <li>
                                <Link to="/maintain">
                                    Sustainability
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/ideas">
                                    Design
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/new">
                                    Innovation
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/legends">
                                    Exclusive
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/store">
                                    Vehicle
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        )
}
}
