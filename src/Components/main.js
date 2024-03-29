import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Homepage from './Homepage';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Project from './project';
 
const Main = () =>(
    <Switch>
        <Route exact path="/" component = {Homepage} />
        <Route  path="/Aboutme" component = {Aboutme} />
        <Route  path="/project" component = {Project} />
        <Route  path="/Contact" component = {Contact} />
    </Switch>
)

export default Main;