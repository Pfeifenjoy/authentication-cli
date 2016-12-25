import React from "react"
import { Login } from "../../src"
const background = require("../images/background.jpg")

function doLogin() {
    console.log("login");
    return Promise.resolve()
}

export default props => <Login background={ background } submit={ doLogin } />
