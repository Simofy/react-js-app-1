import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Background from './Background';

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import Search from "./Search"

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const App = () => (
  <ReduxProvider store={reduxStore}>
  <div>
    <Background />
    <Navbar />
    <div className="left-beauty"></div>
    <div className="right-beauty"></div>
    <Search />
    <Main />
  </div>
  </ReduxProvider>
)

export default App;
