
abstract class Server {
    port: number
    address: string

    constructor(port: number, address: string) {
        this.port = port
        this.address = address
    }

    createFqdn() {
        return `${this.address}:${this.port}`
    }

    abstract initializeRegion(region: string): void
}

class DbServer extends Server {
    region: string = ''

    constructor(port: number, address: string) {
        super(port, address)
    }

    initializeRegion(region: string): void {
        this.region = region
    }
}

const serverObj = new DbServer(8080, 'localhost')
const fqdn = serverObj.createFqdn()
console.log(fqdn)