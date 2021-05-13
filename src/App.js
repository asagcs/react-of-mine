
import React, { PureComponent } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/profile">我的</Link>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    )
  }
}
