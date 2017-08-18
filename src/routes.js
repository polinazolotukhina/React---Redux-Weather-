import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Weather from './containers/Weather/Weather';
import Saved from './containers/Saved/Saved';

import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Weather}/>

        <Route path="saved" component={Saved}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
