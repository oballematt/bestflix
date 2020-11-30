import React from "react"
import Signup from "./components/signup"
import Home from"./components/home"
import Login from "./components/login"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {


  return (
    
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  
  );
}

export default App;
