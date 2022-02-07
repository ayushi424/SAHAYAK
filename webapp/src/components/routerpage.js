import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Landing from './landing'
import PublicHome from './publichome'


export default function RouterPage(){ 
return(
    <div>
    <Router>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/PublicHome" component={PublicHome} />
        </Switch>
    </Router>
    </div>
)
}