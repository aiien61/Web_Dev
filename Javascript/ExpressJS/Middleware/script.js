import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let companyName = "";

// same functionality as morgan
function logger(request, response, next) {
    console.log("Request method:", request.method);
    console.log("Request URL: ", request.url);
    next();
}

function capitalize(word){
    if (!word) {
        return "";
    }else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
}

function compnayNameGenerator(request, response, next){
    console.log(request.body);
    companyName =
      capitalize(request.body["service"]) +
      capitalize(request.body["product"]);
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
// app.use(logger);
app.use(compnayNameGenerator);

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`);
});

app.post("/submit", (request, response) => {
    response.send(`<h1>Your company name is:</h1><h2>${companyName}✅</h2>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});