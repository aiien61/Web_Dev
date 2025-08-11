import express from "express";
import axios from "axios";
import { username, password, apiKey, bearerToken } from "../../config.js";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random");
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.log(error.message);
        res.status(404).send(error.message);
    }
});

app.get("/basicAuth", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/all?page=2", {
            auth: {
                username: username,
                password: password
            }
        })
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.log(error.message);
        res.status(404).send(error.message);
    }
});

app.get("/apiKey", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/filter?", {
            params: {
                score: 5,
                apiKey: apiKey
            }
        });
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.log(error.message);
        res.status(404).send(error.message);
    }
});

app.get("/bearerToken", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/secrets/2", {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
        res.render("index.ejs", { content: JSON.stringify(result.data)});
    } catch (error) {
        console.log(error.message);
        res.status(404).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
