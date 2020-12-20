import React from 'react';
import { Button } from 'antd';

const Trademark = props => {
  return (
    <div>
      {console.log(props)}
    <h1 className='center'>{props.trademark.mark}</h1>
    <a className='center' target='_' href={`https://tsdr.uspto.gov/#caseNumber=${props.trademark.serialNumber}&caseSearchType=US_APPLICATION&caseType=DEFAULT&searchType=statusSearch`}>USPTO TSDR Link</a><br></br>
    {!!props.trademark.id && <Button onClick={props.unfollowTrademark(props.trademark.id, props.token)} type="danger">Unfollow</Button>}
    <Button onClick={props.followTrademark(props.trademark, props.token)} type="primary">+Follow</Button>
    <p>Filing Date: {props.trademark.filingDate}</p>
    <p>Status Date: {props.trademark.statusDate}</p>
    <p>Status: {props.trademark.status}</p>
    <p>Serial Number: {props.trademark.serialNumber}</p><br></br>
    <h3>Prosecution History</h3>
    {props.trademark.prosecutionHistory.map(h => 
      <p>{h.entryDate.substring(0,10)} {h.entryDesc}</p>)}
  </div>
  )
}

export default Trademark
