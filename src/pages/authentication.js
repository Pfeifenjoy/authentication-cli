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
    position: fixed;
    top: 0;
    left: 0;
    background-image: url(${ props => props.background });
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

