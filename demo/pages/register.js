import React from "react"
import { Register } from "../../src"
const background = require("../images/background.jpg")

function doRegister() {
    console.log("register");
    return Promise.resolve()
}

export default props => <Register background={ background } submit={ doRegister } />
