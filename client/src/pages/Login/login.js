import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../../utils/AuthContext"
import { Link, useHistory } from "react-router-dom"



export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSumbit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <div className="style">
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <div className="opacity" >
                        <Card style={{ backgroundColor: "black" }} >
                            <Card.Body >
                                <h2 className="text-center mb-4" style={{ color: "white" }}>Log In</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSumbit}>
                                    <Form.Group id="email">
                                        <Form.Control style={{ backgroundColor: "#383838", color: "white" }} type="email" ref={emailRef} placeholder="Email" required></Form.Control>
                                    </Form.Group>
                                    <Form.Group id="password">

                                        <Form.Control type="password" placeholder="Password" style={{ backgroundColor: "#383838", color: "white" }} ref={passwordRef} required></Form.Control>
                                    </Form.Group>
                                    <Button disabled={loading} style={{ backgroundColor: "red", color: "white" }} className="w-100" type="submit">Log In</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="w-100 text-center mt-2" style={{ color: "white", backgroundColor: "black", opacity: ".8" }}>
                        Need an Account? <Link style={{ color: "white", fontWeight: "bolder", backgroundColor: "black", opacity: ".8" }} to="/signup">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
