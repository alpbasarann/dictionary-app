import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SearchBar from './components/searchBar';
import {store} from './store';
import './index.css';
import MeaningCard from './components/meaningcard';

ReactDOM.render(
  <Provider store = {store}>
    <div>
      <h1>
        Dictionary App
      </h1>
    <SearchBar/>
    <MeaningCard/>
    </div>   
  </Provider>,
  document.getElementById('root')
);