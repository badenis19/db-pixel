import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Component */
import ProductList from './component/ProductList'
import Nav from './component/Nav'

const App = () => {

    return (
      <div>
        <Nav />
        <ProductList />
      </div>
    );
  }

  export default App;
