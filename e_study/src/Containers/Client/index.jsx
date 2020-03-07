import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommonLayout from './CommonLayout';
import HomePage from './HomePage';

const Client = () => {
  return (
    <Router>
      <CommonLayout>
        <Route path='/' exact component={HomePage} />
        <Route path='/home' exact component={HomePage} />

       
        
      </CommonLayout>
    </Router>
   
  );
};

export default Client;