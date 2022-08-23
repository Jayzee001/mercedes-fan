import React, { Component } from 'react'
import Mers from './vid/mers.mp4';

export default class Ads extends Component {
  render() {
    return (
      <div>
        <video src={Mers}
         muted loop="true" autoplay='true' />
      </div>
    )
  }
}
