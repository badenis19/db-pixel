import React from 'react';
import PageHeader from './PageHeader';

const Tracking = ({ trackingData, setTrackingData }) => {

  const displayStats = () => {
    if(trackingData.length){
      return trackingData.map(data => {
        return (
          <div className="stats border text-center bg-white">
            <p><b>Page:</b> {data.path}</p>
            <p><b>Time spent:</b> {data.TimeOnPage}</p>
          </div>
        )
      })
    } else {
      return (
        <div className="stats border text-center bg-white">
          <p>Please browse the site to generate data.</p>    
        </div>
      )
    }
  }

  const hanleClearData = () => {
    setTrackingData([])
  }

  return (
    <div className="container">
      <PageHeader entity="Tracking" />
       {displayStats()}
      <button className="btn btn-warning mt-3" onClick={() => hanleClearData()} >Clear Data</button>
    </div>
  )
}

export default Tracking;
