import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Component */
import ProductList from './component/ProductList';
import Nav from './component/Nav';
import About from './component/About';
import SingleProduct from './component/SingleProduct';

const App = () => {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "test",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 2,
      name: "test",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 3,
      name: "test",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 4,
      name: "test",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 5,
      name: "test",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 6,
      name: "test",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 7,
      name: "test",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    },
    {
      id: 8,
      name: "test",
      price: 90,
      img_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
    }
  ])


  // const [collectionOfTimes, setcollectionOfTimes] = useState([]);

  // const [startOnPage, setStartOnPage] = useState([]);

  // const trackAction = () => {
  //   var start = new Date().getTime();
  // }


  return (
    <Router>
      <div>

        <Nav />

        <Switch>

          <Route 
            path="/products"
            render={() => <ProductList products={products} /> }
            exact
          />

          <Route 
            path="/about"
            render={() => <About /> }
            exact
          />

          <Route 
            path="/products/:id"
            render={(props) => <SingleProduct {...props} products={products} /> }
          /> 

        </Switch>

      </div>
    </Router>
  );
}

export default App;
