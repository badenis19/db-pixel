import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import moment from 'moment';

/* Component */
import ProductList from './ProductList';
import About from './About';
import SingleProduct from './SingleProduct';
import Tracking from './Tracking';

const Routes = ({ trackingData, products, setTrackingData }) => {

  const location = useLocation();
  let start_time = moment();

  useEffect(() => {

    return () => {
      let end_time = moment();

      let diffMin = start_time.diff(end_time, 'minutes');
      let diffSec = start_time.diff(end_time, 'seconds');
      let diff = `${diffMin} minutes and ${diffSec.toString().replace("-", "")} seconds`;

      let data = {
        path: location.pathname,
        TimeOnPage: diff
      }

      trackingData.push(data);
      localStorage.setItem("TrackingData", JSON.stringify(trackingData));
    }

  }, [location])

  return (
    <>
      <Switch>

        <Route
          path="/"
          render={() => <ProductList products={products} />}
          exact
        />

        <Route
          path="/products"
          render={() => <ProductList products={products} />}
          exact
        />

        <Route
          path="/about"
          render={() => <About />}
          exact
        />

        <Route
          path="/products/:id"
          render={(props) => <SingleProduct {...props} products={products} />}
        />

        <Route
          path="/tracking"
          render={() => <Tracking trackingData={trackingData} setTrackingData={setTrackingData} />}
        />

      </Switch>
    </>
  )
}

export default Routes;
