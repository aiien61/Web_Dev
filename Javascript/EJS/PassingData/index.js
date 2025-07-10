import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.render("index.ejs");
});

app.post("/submit", (request, response) => {
    const fName = request.body["fName"];
    const lName = request.body["lName"];
    const numberOfLetters = fName.length + lName.length;
    // console.log(numberOfLetters);
    response.render("index.ejs", {numberOfLetters: numberOfLetters});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
