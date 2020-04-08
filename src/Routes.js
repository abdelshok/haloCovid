// External Packages
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// Internal Modules
// Containers
// Components
import CovidComponent from './covidComponent/CovidComponent';


export default () =>
    <BrowserRouter>
        <Switch>
            <Route path='/covid' exact component={CovidComponent} />
        </Switch>
    </BrowserRouter>
