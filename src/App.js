import React, { Component } from 'react';
import Header from '../src/components/Header/header';
import Search from '../src/components/Search/search';
import PhotoDetail from '../src/components/photodetail.js/photodetail'
import {Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
           <Header title ='PixabaySearch' />
           <Switch>
           <div className = 'container' style={{marginTop: '50px'}}>
              <Route path = '/' exact component={Search} />
              <Route path = '/react-imagebay' component={Search} />
              <Route path = '/photo/:id' component={PhotoDetail} />
           </div>
           </Switch>
      </div>
    );
  }
}

export default (App);
