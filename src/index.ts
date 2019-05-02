import App from "./app";
import database from "./database";

// NOTE starting the server
database();
const app = new App();

app.start();
