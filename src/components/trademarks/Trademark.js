import React from 'react';

const Trademark = props => {
  return (
    <div>
    <h1 class='center'>{props.state.mark}</h1>
    <p>Filing Date: {props.state.filingDate}</p>
    <p>Status Date: {props.state.statusDate}</p>
    <p>Status: {props.state.status}</p>
    <p>Sreial Number: {props.state.serialNumber}</p><br></br>
    <h3>Prosecution History</h3>
    {props.state.prosecutionHistory.map(h => 
      <p>{h.entryDate.substring(0,10)} {h.entryDesc}</p>)}
  </div>
  )
}

export default Trademark
