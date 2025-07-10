import express from "express";


const app = express();
const port = 3000;

app.get("/", (request, response) => {
    const today = new Date();
    // const today = new Date("July 12, 2025");
    let day = today.getDay();

    // console.log(day);
    let type = "a weekday";
    let adv = "workd hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "have some fun";
    }

    // auto going to search views directory for index.ejs file
    response.render("index.ejs", {
      dayType: type,
      advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on ${port}.`);
});