import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';


import App from './components/index';
import Photopage from './components/photopage';
import Header from './components/header';
import store from './store'; 

const routes = (
	<Router>
		<div>
			<Header />
			<Route exact path='/' component={App} />
			<Route path='/photos' component={Photopage} />
		</div>
	</Router>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			{routes}
		</Provider>
		, document.getElementById('app'));
});