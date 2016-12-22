import React from "react"
import styled from "styled-components"
import { Route } from "react-router"

const Page = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    width: 100%;
    position: absolute;
`

const FormContainer = styled.div`
    min-width: 15em;
    max-width: 25em;
    width: 45%;
    flex-grow: 1;
`

export default props => <Page>
    <FormContainer>
        { props.children }
    </FormContainer>
</Page>

export function connect(path, link, Component) {
    return <Route
        path={ path }
        component={
            props => <Component
                linkPath={ link }
                { ...props }
            />
        }
    />
}

