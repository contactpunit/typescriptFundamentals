"use strict";
class Server {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    createFqdn() {
        return `${this.address}:${this.port}`;
    }
}
const serverObj = new Server(8080, 'localhost');
const fqdn = serverObj.createFqdn();
console.log(fqdn);
