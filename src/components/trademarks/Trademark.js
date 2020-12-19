import React from 'react';
import { Button } from 'antd';

const Trademark = props => {
  return (
    <div>
    <h1 className='center'>{props.trademark.mark}</h1>
    <button className='center'>Unfollow</button>
    <Button type="ghost">Follow</Button>
    <p>Filing Date: {props.trademark.filingDate}</p>
    <p>Status Date: {props.trademark.statusDate}</p>
    <p>Status: {props.trademark.status}</p>
    <p>Serial Number: {props.trademark.serialNumber}</p><br></br>
    <h3>Prosecution History</h3>
  </div>
  )
}
//    {props.trademark.prosecutionHistory.map(h => 
//<p>{h.entryDate.substring(0,10)} {h.entryDesc}</p>)}
export default Trademark
