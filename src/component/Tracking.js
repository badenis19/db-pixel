import React from 'react';
import PageHeader from './PageHeader';
import { useHistory } from 'react-router-dom';

const Tracking = ({ trackingData }) => {

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  }

  return (
    <div className="container">
      <PageHeader entity="Tracking" />
      <p className="intro">Find the tracking information below:</p>
        if(trackingData.length){
        trackingData.map(data => {
          return (
            <div>
              <p>{data.path}</p>
              <p>{data.TimeOnPage}</p>
            </div>
          )
        })
      }
      <button onClick={handleGoBack}>back</button>
    </div>
  )
}

export default Tracking;
