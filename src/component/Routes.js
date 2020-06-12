import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import moment from 'moment';

/* Component */
import ProductList from './ProductList';
import About from './About';
import SingleProduct from './SingleProduct';
import Tracking from './Tracking';

const Routes = ({ trackingData, products }) => {

  const location = useLocation()

  let start_time = moment();
  console.log("<start>", start_time._d);

  useEffect(() => {
    
    return () => {
      let end_time = moment();

      let diffMin = start_time.diff(end_time, 'minutes');
      let diffSec = start_time.diff(end_time, 'seconds');
      let diff = `${diffMin} minutes and ${diffSec.toString().replace("-","")} seconds`;
      console.log(diff);

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
          render={() => <Tracking trackingData={trackingData} />}
        />

      </Switch>
    </>
  )
}

export default Routes;
