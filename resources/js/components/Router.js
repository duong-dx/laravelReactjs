import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show";

export default class RouterPath extends Component{
    render() {
        return (
           <main>
               <Switch>
                   <Route exact path='/home' component={Home} />
                   <Route exact path='/create' component={Create} />
                   <Route exact path='/edit/:id' component={Edit} />
                   <Route exact path='/posts/:id' component={Show} />
               </Switch>
           </main>
        )
    }
}

