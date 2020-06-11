import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

/* Component */
import Nav from './component/Nav';
import Routes from './component/Routes';

const App = () => {

  const setPathname = (pathname) => {
    console.log("**", pathname)
}

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

  return (
    <Router>
      <div>

        <Nav />
        <Routes setPathname={setPathname} products={products} trackingData={trackingData}  />
       
      </div>
    </Router>
  );
}

export default App;
