import React from "react"
import { Button, Input as InputTemplate, Box } from "arwed-components"
import { Link } from "react-router"
import { login } from "../actions/user"
import Authentication, { connect } from "./authentication"
import styled from "styled-components"

const INPUT_MARGIN = 0.4

const Input = styled(InputTemplate)`
    width: calc(100% - ${ INPUT_MARGIN * 2 }em);
    margin: ${ INPUT_MARGIN }em;
`

const Login = props => <Authentication>
    <Box title="Login">
        <form method="post">
            <Input 
                name="email" 
                placeholder="email"
            />
            <Input 
                name="password"
                placeholder="password"
                type="password"
            />
            <Button
                type="submit"
            >
                Login
            </Button>
            <p>
                or <Link to={ props.linkPath || "/register" }>Register</Link>
            </p>
        </form>
    </Box>
</Authentication>

export default (path, link) => {
    return connect(path, link, Login)
}
