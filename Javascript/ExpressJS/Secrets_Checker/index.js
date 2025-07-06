// The password is ILoveProgramming
import express, { response } from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(request, response, next) {
    const password = request.body["password"];
    if (password === "ILoveProgramming") {
        userIsAuthorised = true;
    }
    next();
}

app.use(passwordCheck);

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`);
});

app.post("/check", (request, response) => {
    if (userIsAuthorised) {
        response.sendFile(`${__dirname}/public/secret.html`);
    } else {
        response.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
