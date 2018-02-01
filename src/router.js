import React from "react";
import { Switch, Route } from "react-router-dom";

import Shirts from './Components/Shirts/shirts.js'
import Vinyl from './Components/Vinyl/vinyl.js'
import Socks from './Components/Socks/socks.js'
import Patches from './Components/Patches/patches.js'
import FeaturedItem from './Components/Featured Item/featured-item.js'
import FeaturedItem2 from './Components/Featured Item/featured-item2.js'
import FeaturedItem3 from './Components/Featured Item/featured-item3.js'
import Posters from './Components/Posters/posters.js'

export default (
    <Switch>
    <Route path="/" exact component={Shirts}/>
    <Route path="/vinyl" component={Vinyl}/>
    <Route path="/socks" component={Socks}/>
    <Route path="/patches" component={Patches}/>
    <Route path="/featured-item" component={FeaturedItem}/>
    <Route path="/featured-item-2" component={FeaturedItem2}/>
    <Route path="/featured-item-3" component={FeaturedItem3}/>
    <Route path="/posters" component={Posters}/>
    </Switch>
)