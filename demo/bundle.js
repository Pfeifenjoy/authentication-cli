import React from "react"
import { render } from "react-dom"
import { Router, browserHistory, Route } from "react-router"
import { Provider } from "react-redux"
import store from "./store"
import { Login, Register } from "./pages"

const App = () => {
    return <Provider store={ store() }>
        <Router history={ browserHistory }>
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
        </Router>
    </Provider>
}

const target = document.getElementById("content")
render(<App />, target)
