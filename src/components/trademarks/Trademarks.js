import React, { Component } from 'react';
import Trademark from '../trademarks/Trademark';


class Trademarks extends Component {

    fetchTrademark = (trademark) => () => {
        console.log(trademark)
    }

  render() {
    return(
      <div>
        {this.props.trademarks.map((trademark, index) => {
           return <a onClick={this.fetchTrademark(trademark)}><h1>{index+1}. {trademark.mark}</h1></a>})}
      </div>
    );
  }
};
//return <li><Trademark key={index} trademark={trademark}/></li>})}

export default Trademarks;