import React from 'react';
import PageHeader from './PageHeader';
import { useLocation, useHistory } from 'react-router-dom';

const Tracking = () => {

  const location = useLocation();
  const history = useHistory();
  console.log(location);

  const handleGoBack = () => {
    history.goBack();
  }

  return (
    <div className="container">
      <PageHeader entity="Tracking" />
      <p className="intro">Find the tracking information below:</p>
      <h2 className="text-center">COMING SOON..{location.pathname}</h2>
      <button onClick={handleGoBack}>back</button>
    </div>
  )
}

export default Tracking;
