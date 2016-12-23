import { browserHistory } from "react-router"

export function requireAuth(store) {
    return function(nextState, replace) {
        if(!store.getState().user.token) {
            replace({
                pathname: "/login",
                state: { nextPathname: nextState.location.pathname }
            })
        }
    }
}
