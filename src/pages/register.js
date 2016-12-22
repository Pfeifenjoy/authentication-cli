import React, { Component } from "react"
import { Button, Input } from "arwed-components"
import { Link, Route } from "react-router"
import { register } from "../actions/user"
import Authentication, { connect } from "./authentication"
import styled from "styled-components"


const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1em;
    background-color: #ecf0f1;
    border-radius: 0.3em;
`

class Register extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            repassword: ""
        }
    }

    handleEmailChange(event) {
        const email = event.target.value
        this.setState({ email })
    }

    handlePasswordChange(event) {
        const password = event.target.value
        this.setState({ password })
    }

    handleRepasswordChange(event) {
        const repassword = event.target.value
        this.setState({ repassword })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { email, password, repassword } = this.state
        this.props.dispatch(register(email, password, repassword))
        this.setState({
            email: "",
            password: "",
            repassword: ""
        })
    }

    render() {
        const {
            linkPath,
            ...props
        } = this.props

        const buttonStyle = {
            marginTop: "2em"
        }

        return <Authentication>
            <Form>
                <Input 
                    name="email" 
                    placeholder="email"
                    value={ this.state.email }
                    onChange={ e => this.handleEmailChange(e) }
                />
                <Input 
                    name="password"
                    placeholder="password"
                    type="password"
                    value={ this.state.password }
                    onChange={ e => this.handlePasswordChange(e) }
                />
                <Input 
                    name="repassword"
                    placeholder="repassword"
                    type="password"
                    value={ this.state.repassword }
                    onChange={ e => this.handleRepasswordChange(e) }
                />
                <Button
                    type="submit"
                    style={ buttonStyle }
                >
                    Register
                </Button>
                <p>
                    or <Link to={ linkPath || "/login" }>Login</Link>
                </p>
            </Form>
        </Authentication>
    }
}

export default (path, link) => connect(path, link, Register)
