import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main.js';
import Blog from './Blog.js';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/blog" component={Blog}/>
    </Switch>
)

export default Routing;