/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 import React from 'react';
 import Router from 'react-router';
 import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

 let App = React.createClass({
   render() {
     return (
       <div className="nav">
         <Link to="app">大傻逼</Link>
         <Link to="login">Login</Link>
         {/* this is the importTant part */}
         <RouteHandler/>
       </div>
     );
   }
 });

 let routes = (
   <Route name="app" path="/" handler={App}>
     <Route name="login" path="/login"/>
   </Route>
 );

 Router.run(routes, function (Handler) {
   React.render(<Handler/>, document.body);
 });
