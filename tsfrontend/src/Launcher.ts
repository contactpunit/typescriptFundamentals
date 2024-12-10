import { Router } from "./Router"

class Launcher {

    private router: Router = new Router()

    public launchApp() {
        console.log('app started')
        this.router.handleRequest()
    }
}

new Launcher().launchApp()