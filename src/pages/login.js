import React, { Component } from "react"
import { Box } from "arwed-components"
import { Link } from "react-router"
import Authentication, { connect } from "./authentication"
import { Input, Button } from "../controls"


export default class Login extends Component {

    state = {
        username: "",
        password: "",
        busy: false
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { email, password } = this.state
        this.setState({ busy: true })
        this.props.submit(email, password)
            .then(() => this.setState({
                email: "",
                password: "",
                busy: false
            }))
            .catch(() => {
                this.setState({ busy: false })
            })
    }

    render() {
        const { linkPath, background, submit, ...props } = this.props
        const { busy, email, password } = this.state

        return <Authentication background={ background }>
            <Box title="Login" { ...props }>
                <form method="post">
                    <Input 
                        onChange={ e => this.handleEmailChange(e) }
                        value={ email }
                        placeholder="email"
                        busy={ busy }
                    />
                    <Input 
                        onChange={ e => this.handlePasswordChange(e) }
                        value={ password }
                        placeholder="password"
                        type="password"
                        busy={ busy }
                    />
                    <Button
                        onClick={ e => this.handleSubmit(e) }
                        type="submit"
                        busy={ busy }
                    >
                        Login
                    </Button>
                    <p>
                        or <Link to={ linkPath || "/register" }>Register</Link>
                    </p>
                </form>
            </Box>
        </Authentication>
    }
}
