import React from "react"
import Signup from "./components/signup"
import Home from"./components/home"
import Login from "./components/login"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {


  return (
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
              </Switch>
            </AuthProvider>
          </Router>
  
  );
}

export default App;
