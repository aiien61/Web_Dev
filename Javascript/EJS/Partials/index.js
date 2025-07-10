import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (request, response) => {
    response.render("index.ejs");
});

app.get("/about", (request, response) => {
    response.render("about.ejs");
});

app.get("/contact", (request, response) => {
    response.render("contact.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
