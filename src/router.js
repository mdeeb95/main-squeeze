import React from "react";
import { Switch, Route } from "react-router-dom";

import Shirts from './Components/Shirts/shirts.js'
import Vinyl from './Components/Vinyl/vinyl.js'

export default (
    <Switch>
    <Route path="/shirts" component={Shirts}/>
    <Route path="/vinyl" component={Vinyl}/>
    </Switch>
)