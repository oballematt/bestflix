import React from "react"
import Signup from "./pages/Signup/signup"
import Home from "./pages/Home/home"
import Login from "./pages/Login/login"
import Movies from "./pages/Movies/movies"
import Shows from "./pages/Tvshows/tvshows"
import Profile from "./pages/Profile/profile"
import PrivateRoute from "./components/PrivateRoute"
import { AuthProvider } from "./utils/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/movies" component={Movies} />
          <PrivateRoute exact path="/tvshows" component={Shows} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;
