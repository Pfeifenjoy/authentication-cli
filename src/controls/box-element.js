import styled from "styled-components"

const MARGIN = 0.4

export default Component => styled(Component)`
    width: calc(100% - ${ MARGIN * 2 }em);
    margin: ${ MARGIN }em;
`
