import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../../utils/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSumbit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <div className="style">
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card className="opacity" style={{ backgroundColor: "black" }}>
                        <Card.Body>
                            <h2 className="text-center mb-4" style={{ color: "white" }}>Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSumbit}>
                                <Form.Group id="email">
                                    <Form.Control style={{ backgroundColor: "#383838", color: "white" }} type="email" ref={emailRef} placeholder="Email" required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Control style={{ backgroundColor: "#383838", color: "white" }} type="password" placeholder="Password" ref={passwordRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Control style={{ backgroundColor: "#383838", color: "white" }} placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required></Form.Control>
                                </Form.Group>
                                <Button style={{ backgroundColor: "red", color: "white" }} disabled={loading} className="w-100" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2" style={{ color: "white", backgroundColor:"black", opacity: ".8" }}>
                        Already have an account? <Link style={{color: "white", fontWeight:"bolder", backgroundColor: "black", opacity: ".8"}} to="/login">Log in</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
