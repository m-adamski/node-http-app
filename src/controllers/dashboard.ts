import { Controller } from "node-http-server";

export class DashboardController extends Controller {

    protected _controllerName: string = "DashboardController";

    constructor() {
        super();

        // Register Routes
        this.registerRoute({
            method: "GET",
            path: "/",
            config: { handler: this.indexAction, bind: this }
        });

        this.registerRoute({
            method: "GET",
            path: "/auth",
            config: { handler: this.authAction, bind: this, auth: "token" }
        });
    }

    /**
     * GET /
     * Index Action
     *
     * @param {any} request
     * @param {any} response
     *
     * @memberOf DashboardController
     */
    public indexAction(request, response) {
        response({ code: 200, message: "Working.." });
    }

    /**
     * GET /auth
     * Auth Test Action
     *
     * @param {any} request
     * @param {any} response
     *
     * @memberOf DashboardController
     */
    public authAction(request, response) {
        response({ code: 200, message: "Token is correct. Welcome!" });
    }
}
