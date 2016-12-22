import { getUrl } from "../http"
import request from "superagent"

export function login(email, password) {
    const destination = getUrl("/users/authenticate")
    return {
        type: "LOGIN",
        payload: request
            .post(destination)
            .send({ email, password })
    }
}

export function register(email, password, repassword) {
    const destination = getUrl("/users")
    return {
        type: "REGISTER",
        payload: request
            .post(destination)
            .send({ email, password, repassword })
    }
}
