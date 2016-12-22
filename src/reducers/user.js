function extractCookies() {
    if(typeof document !== "undefined") {
        return document.cookie.split(";")
            .map(cookie => cookie.split("="))
            .filter(pair => pair.length === 2) //only accept pairs => when no cookie is set
            .map(pair => [ pair[0].trim(), pair[1].trim() ])
            .map(pair => {
                //create a json object for every key
                const object = {}

                try {
                    object[pair[0]] = JSON.parse(pair[1])
                } catch(e) {
                    object[pair[0]] = pair[1]
                }

                return object
            })
            .reduce((a, b) => Object.assign(a, b), {}) //merge objects
    } else {
        return {}
    }
}

function saveCookies(object) {
    if(typeof document !== "undefined") {
        let cookies = ""
        for(let i in object) {
            if(object[i]) {
                cookies += `${ i }=${ JSON.stringify(object[i]) };`
            }
        }
        document.cookie = cookies
    }
}

function readToken() {
    //extract cookies from
    const cookies = extractCookies()
    return cookies.token
}

function saveToken(token) {
    saveCookies({ token })
}

function readUserInformation() {
    if(typeof window !== "undefined") {
        const userString = localStorage.getItem("user")
        if(userString) {
            return JSON.parse(userString)
        }
    }
    return {}
}

function saveUserInformation(user={}) {
    if(typeof window !== "undefined") {
        const userString = JSON.stringify(user)
        localStorage.setItem("user", userString)
    }
}

function handleLogin(id, token) {
    const store = {}
    store.id = id
    saveUserInformation(store)
    saveToken(token)
    //exclude token from user information
    store.token = token
    return store
}

//initialize user
const user = readUserInformation()
user.token = readToken()

export default function(store=user, action) {

    switch(action.type) {
        case "LOGIN_FULFILLED": {
            const { id, token } = action.payload.body
            store = handleLogin(id, token)
            break
        }
        case "LOGIN_REJECTED": {
            //delete all tokens
            store = handleLogin()
            break
        }
        case "REGISTER_FULFILLED": {
            const { id, token } = action.payload.body
            store = handleLogin(id, token)
            break
        }
        case "REGISTER_REJECTED": {
            //delete all tokens
            store = handleLogin()
            break
        }
    }

    return store
}
