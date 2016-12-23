import React from "react"
import { render } from "react-dom"
import { Router, browserHistory } from "react-router"
import { Provider } from "react-redux"
import store from "./store"
import { login, register } from "../src"
const background = require("./images/background.jpg")

const onLogin = () => {
    console.log("login");
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })
}

const onRegister = () => {
    console.log("register");
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })
}
const App = () => {
    return <Provider store={ store() }>
        <Router history={ browserHistory }>
            { login(onLogin, "login", "register", background) }
            { register(onRegister, "register", "login", background) }
        </Router>
    </Provider>
}

const target = document.getElementById("content")
render(<App />, target)
