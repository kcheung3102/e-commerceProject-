import React from 'react';
import './App.css';
import Cart from './Components/Cart';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Error from './Components/Error';
import Details from './Components/Details';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Error} />
      </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
