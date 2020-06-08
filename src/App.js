import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Component */
import ProductList from './component/ProductList';
import Nav from './component/Nav';
import About from './component/About';
import SingleProduct from './component/SingleProduct';
import Tracking from './component/Tracking';

const App = () => {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "PC 1",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 2,
      name: "PC 2",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 3,
      name: "PC 3",
      price: 900,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 4,
      name: "PC 4",
      price: 930,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 5,
      name: "PC 5",
      price: 490,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 6,
      name: "PC 6",
      price: 690,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 7,
      name: "PC 7",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 8,
      name: "PC 8",
      price: 390,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    }
  ])

  const [trackingData, setTrackingData] = useState(() => {
    const localData = localStorage.getItem('TrackingData');
    return localData ? JSON.parse(localData) : [];
  });

  // console.log(">>", trackingData)

  // declaring variables
  let start_minutes = null;
  let start_seconds = null;

  // get the minutes on page load
  const start = () => {
    start_minutes = new Date().getMinutes();
    start_seconds = new Date().getSeconds();
    return `start ${start_minutes} + ${start_seconds}`;
  }

  start();

  // get minutes before leaving the page and works out time spent on the page
  setTimeout(() => {
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let diff_minutes = minutes - start_minutes;
    let diff_seconds = seconds - start_seconds;
    let diff = `${diff_minutes}:${diff_seconds}`;
    // console.log(diff)
    let data = {
      path: "path",
      time_on_page: diff
    }
    trackingData.push(data)
    console.log("::", trackingData)
    return diff;
  }, 3000)

  setTimeout(useEffect(() => {
    console.log(trackingData)
    console.log("useEffect")
    localStorage.setItem("TrackingData", JSON.stringify(trackingData))
  }, [trackingData])
    , 6000)


  setTimeout(() => console.log("<<", trackingData)
    , 3010)


  return (
    <Router>
      <div>

        <Nav />

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

      </div>
    </Router>
  );
}

export default App;
