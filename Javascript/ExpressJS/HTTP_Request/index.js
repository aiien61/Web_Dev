import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    // console.log(request.rawHeaders);
    response.send("<h1>Hello</h1>");
});

app.get("/about", (request, response) => {
    response.send("<h1>About Me</h1><p>I'm a superhero.</p>");
});

app.get("/contact", (request, response) => {
    response.send("<h1>Contact Me</h1><p>Email: superhero@heromail.com</p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});