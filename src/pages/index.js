import React from "react"
import login from "./login"
import register from "./register"
import { Route } from "react-router"

export default (loginPath, registerPath) => <Route>
    { login(loginPath, registerPath) }
    { register(registerPath, loginPath) }
</Route>
