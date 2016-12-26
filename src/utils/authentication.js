import { browserHistory } from "react-router"

export function requireAuth(store) {
    return function(...args) {
        let replace, nextState
        if(args.length === 4) {
            replace = args[2]
            nextState = args[1]
        } else {
            replace = args[1]
            nextState = args[0]
        }
        if(!store.getState().user.token) {
            replace({
                pathname: "/login",
                state: { nextPathname: nextState.location.pathname || "/" }
            })
        }
    }
}
