
interface IServer {
    port: number
    address: string
    createFqdn(): string
}

class Server implements IServer {
    port: number
    address: string

    constructor(port: number, address: string) {
        this.port = port
        this.address = address
    }

    createFqdn(): string {
        return `${this.address}:${this.port}`
    }
}

// class DbServer extends Server {
//     region: string = ''

//     constructor(port: number, address: string) {
//         super(port, address)
//     }

//     initializeRegion(region: string): void {
//         this.region = region
//     }
// }

const server = new Server(8080, 'localhost')
console.log(server.createFqdn())