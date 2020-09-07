import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";
import { withRouter } from "react-router";
import LoginLayout from './Components/Login/LoginLayout';
import Viewboard from "./Components/Viewboard/Viewboard";
// import Middleware from './Components/Login/Middleware'
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
          {/* <Route path="/" component={withRouter(Middleware)} /> */}
          <Route path="/login" exact component={withRouter(LoginLayout)} />
          <Route path="/Viewboard" component={withRouter(Viewboard)} />
            {/* <Route path="/">
               <LoginLayout/>
            </Route> */}
            {/* <Route path="/Viewboard">
               <Viewboard/> 
             </Route> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
