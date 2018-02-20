import React, { Component } from 'react';
import Header from '../src/components/Header/header';
import Search from '../src/components/Search/search';
import PhotoDetail from '../src/components/photodetail.js/photodetail'
import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
           <Header title ='PixabaySearch' />
           <div className = 'container' style={{marginTop: '50px'}}>
              <Route path = '/' exact component={Search} />
              <Route path = '/photo/:id' component={PhotoDetail} />
           </div>
      </div>
    );
  }
}

export default (App);
