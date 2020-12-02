import React from "react"
import Signup from "./pages/signup"
import Home from"./pages/home"
import Login from "./pages/login"
import Movies from "./pages/movies"
import PrivateRoute from "./components/PrivateRoute"
import { AuthProvider } from "./utils/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path ="/" component={Home}/>
                <PrivateRoute exact path ="/movies" component={Movies}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
              </Switch>
            </AuthProvider>
          </Router>
  
  );
}

export default App;
