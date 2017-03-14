import { AuthProvider } from "node-http-server";

export class CustomAuthProvider extends AuthProvider {

    constructor() {
        super();

        this._dataCollection = new Set<any>([
            { token: "f93178f68aa514ec5c31efa1ae5f6a831dc4a2eb", name: "Frank" }
        ]);
    }
}
