import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, applyRouterMiddleware }  from 'react-router';
import { useScroll } from 'react-router-scroll';
import routes from './routes';

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
      	<Router 
	        history={hashHistory}
	        routes={routes}
	        render={applyRouterMiddleware(useScroll())}
	    />, document.getElementById('app'));
});
