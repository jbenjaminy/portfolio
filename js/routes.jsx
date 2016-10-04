import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/main';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

let App = (props) => {
    return (
        <center className='app'>
            <div className='children'>{props.children}</div>
        </center>
    );  
};

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Main}/>
        <Route path='/portfolio/:project'>
            <IndexRoute component={Portfolio}/>
        </Route>
        <Route path='/resume' component={Resume}/>
    </Route>
);

export default routes;