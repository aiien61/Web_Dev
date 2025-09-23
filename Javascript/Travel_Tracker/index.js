import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "YOUR-DATABASE-PASSWORD",
    port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited(){ 
    const result = await db.query("SELECT country_code FROM visited_countries");
    let countries = [];
    result.rows.forEach((country) => {
        countries.push(country.country_code);
    });
    console.log(result.rows);
    console.log(countries);
    return countries;
}

app.get("/", async (req, res) => {
    const countries = await checkVisited();
    res.render("index.ejs", { countries: countries, total: countries.length });
    // db.end();
});

app.post("/add", async (req, res) => {
    // Get the country name that users type in
    const input = req.body['country'];
    console.log(req.body['country']);

    try {
        // Get the country code that corresponds to the target country
        
        try {
            let sql = `
                SELECT country_code
                FROM countries
                WHERE LOWER(country_name) LIKE '%' || $1 || '%'
            `;
            const args = [input.toLowerCase()];
            const result = await db.query(sql, args);
            const data = result.rows[0];
            const countryCode = data.country_code;

            sql = "INSERT INTO visited_countries (country_code) VALUES ($1)"
            await db.query(sql, [countryCode]);
            res.redirect("/");

        } catch (error) {
            console.log(error);
            const countries = await checkVisited();
            res.render("index.ejs", {
                countries: countries,
                total: countries.length,
                error: "Country has already been added, try again."
            });
        }
        
    } catch (error) {
        console.log(error);
        const countries = await checkVisited();
        res.render("index.ejs", {
            countries: countries,
            total: countries.length,
            error: "Country name does not exist, try again."
        });
    }
    
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
