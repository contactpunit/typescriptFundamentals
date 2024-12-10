function returnKeys<T extends Object>(arg: T) {
    console.log(Object.keys(arg))
    return arg
}

const a = returnKeys({
    name: 'Punit'
})

interface ServerResponse <T> {
    method: string,
    url: string,
    body: T
}

const response: ServerResponse<string> = {
    method: 'POST',
    url: 'localhost:8080',
    body: 'server is up'
}

class Server <T extends ServerResponse<string>> {
    printResponse(arg: T) {
        console.log(arg.body)
    }
}

new Server<ServerResponse<string>>().printResponse(response)