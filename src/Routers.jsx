import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import ProductList from './components/productList/productList';
import ErrorPage from './components/error/errorPage';

const Routers = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={ProductList} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </Fragment>
);

export default Routers;
