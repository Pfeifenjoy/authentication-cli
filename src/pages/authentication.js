import React from "react"
import styled from "styled-components"
import { Route } from "react-router"

const Page = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
    position: absolute;
`

const FormContainer = styled.div`
    min-width: 15em;
    max-width: 25em;
    width: 45%;
`

export default p => {
    const {
        children,
        ...props
    } = p
    return <Page { ...props }>
        <FormContainer>
            { children }
        </FormContainer>
    </Page>
}

/**
 * This function takes a Component.
 * Than it decorates the component with
 * the given properties.
 * @param submit {function} A callback function which is fired when the default action of the authentication form is started. This function must return a promise.
 * @param path {string} Specify a path of the route where the AuthenticationPage should be registered
 * @params link {string} a login page creates a link to a register page and so on.
 *                      With this parameter this link is specified.
 */
export function connect(Component, submit, path, link) {
    return <Route
        path={ path }
        component={
            props => <Component
                submit={ submit }
                linkPath={ link }
                { ...props }
            />
        }
    />
}

