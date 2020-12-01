import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
// import { Link } from "react-router-dom";


function Navibar() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/">{currentUser.email}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link font" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link font" to="/login">Movies</Link>
                    <Link className="nav-link font" to="/signup">Tv Shows</Link>
                    <Link className="nav-link font" to="/signup">Profile</Link>
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>
                </div>
            </div>
        </nav>
            <div>
            {error && <Alert variant="danger">{error}</Alert>}
            </div>
        </>

    )
}

export default Navibar




