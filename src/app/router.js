import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import RootContainer from './rootRoute';


function RouterConfig(){
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={RootContainer}></Route>
        </Switch>
      </HashRouter>
    );
}

export default RouterConfig;

