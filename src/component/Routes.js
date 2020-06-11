import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom"

/* Component */
import ProductList from './ProductList';
import About from './About';
import SingleProduct from './SingleProduct';
import Tracking from './Tracking';

const Routes = ({setPathname, products}) => {

  const location = useLocation()

    useEffect(() => {
        console.log("*", location.pathname)
        setPathname(location.pathname)
    },[location])

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
          render={() => <Tracking />}
        />

      </Switch>
    </>
  )
}

export default Routes;