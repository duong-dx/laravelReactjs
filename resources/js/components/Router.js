import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import Create from "./Create";
import Edit from "./Edit";

export default class RouterPath extends Component{
    render() {
        return (
           <main>
               <Switch>
                   <Route exact path='/home' component={Home} />
                   <Route exact path='/create' component={Create} />
                   <Route exact path='/edit/:id' component={Edit} />
               </Switch>
           </main>
        )
    }
}

