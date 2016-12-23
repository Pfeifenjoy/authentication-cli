import React, { Component } from "react"
import { Box } from "arwed-components"
import { Link } from "react-router"
import { register } from "../actions/user"
import Authentication, { connect } from "./authentication"
import { Input, Button } from "../controls"



class Register extends Component {

    state = {
        email: "",
        password: "",
        repassword: "",
        busy: false
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleRepasswordChange(event) {
        this.setState({ repassword: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        const { email, password, repassword } = this.state

        this.setState({ busy: true })
        this.props.submit(email, password, repassword)
            .then(() => this.setState({ 
                    email: "",
                    password: "",
                    repassword: "",
                    busy: false
                })
            )
            .catch(() => {
                this.setState({ busy: false })
            })
    }

    render() {
        const { linkPath, ...props } = this.props
        const { email, password, repassword, busy } = this.state

        return <Authentication>
            <Box title="Register">
                <form method="post">
                    <Input 
                        onChange={ e => this.handleEmailChange(e) }
                        value={ email }
                        busy={ busy }
                        placeholder="email"
                    />
                    <Input 
                        onChange={ e => this.handlePasswordChange(e) }
                        value={ password }
                        placeholder="password"
                        busy={ busy }
                        type="password"
                    />
                    <Input 
                        onChange={ e => this.handleRepasswordChange(e) }
                        value={ repassword }
                        placeholder="repassword"
                        busy={ busy }
                        type="password"
                    />
                    <Button
                        onClick={ e => this.handleSubmit(e) }
                        busy={ busy }
                        type="submit"
                    >
                        Register
                    </Button>
                    <p>
                        or <Link to={ linkPath || "/login" }>Login</Link>
                    </p>
                </form>
            </Box>
        </Authentication>
    }
}

export default (submit, path, link) => connect(Register, submit, path, link)
