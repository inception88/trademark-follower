import React, { Component } from 'react';
import Trademark from '../trademarks/Trademark';


class Trademarks extends Component {
  render() {
    return(
      <ul>
        {this.props.trademarks.map((trademark, index) => {
        return <li><Trademark key={index} trademark={trademark}/></li>})}
      </ul>
    );
  }
};

export default Trademarks;