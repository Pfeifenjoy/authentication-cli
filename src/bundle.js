import React from "react"
import { render } from "react-dom"
import { Router, browserHistory } from "react-router"
import { Provider } from "react-redux"
import store from "./store"
import { authentication } from "."

const App = () => {
    return <Provider store={ store() }>
        <Router history={ browserHistory }>
            { authentication("login", "register") }
        </Router>
    </Provider>
}

const target = document.getElementById("content")
render(<App />, target)
