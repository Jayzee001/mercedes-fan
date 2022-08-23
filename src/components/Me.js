

import React, { Component } from 'react';
import "./inde.css";
import logis from './pix/logis.png'
import Benz from './Benz'
// import Legends from "./Legends";
// import About from './About';

export default class background extends Component {
  render() {
      return (
<div className='contain'>
    <div className='lig'>
            <div className="content" id="slider">
                    <div className="welcome">
                        <div className='spin' >
                            <img id='rotate' src={logis} alt="logo" />
                        </div>
                            <Benz/>
            </div>
            </div>
              </div>
                      <div>
                  {/* <About />     */}
                  {/* <Legends /> */}
                  
        </div>
    </div>


    )
  }
}
