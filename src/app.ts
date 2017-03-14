import * as Winston from "winston";
import { HttpServer, Debug, Config } from "node-http-server";
import { CustomAuthProvider } from "./providers/custom-auth-provider";
import { DashboardController } from "./controllers/dashboard";

// Initialize Config Service
let configService = new Config("./src/config.yml");

// Initialize Debug Service & add Console transporter
let debugService = new Debug(true);
debugService.addTransporter(Winston.transports.Console, { colorize: true });

// Initialize Http Server
let httpServer = new HttpServer({ host: "localhost", port: 3000 }, new CustomAuthProvider(), debugService, configService);
httpServer.startServer();

// Register Controllers
httpServer.routerService.registerController(new DashboardController());
