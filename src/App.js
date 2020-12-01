import React from "react"
import Signup from "./pages/signup"
import Home from"./pages/home"
import Login from "./pages/login"
import PrivateRoute from "./components/PrivateRoute"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {


  return (
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path ="/" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
              </Switch>
            </AuthProvider>
          </Router>
  
  );
}

export default App;
