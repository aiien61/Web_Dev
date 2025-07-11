import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Hardcoded credentials
const adminName = "admin";
const adminPassword = "password123";
const secretKey = "my-secret-key-for-blog";

// Hardcoded admin credentials for demo
const adminCredentials = {
    username: adminName,
    password: adminPassword
}

// Middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true })); // to parse from data
app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if using HTTP
}));

// Custom middleware to protect routes
const requireLogin = (req, res, next) => {
    if (req.session.isLoggedIn) {
        // User is logged in, proceed to the next middlware/route handler
        next();
    } else {
        // User is not logged in, redirect to login page
        res.redirect("/login");
    }
}

// Routes
app.get("/", (req, res) => {
    res.render("index", { isAdmin: req.session.isLoggedIn || false });
});

// GET route to display the login page
app.get("/login", (req, res) => {
    res.render("login");
});


// POST route to handle login logic
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        req.session.isLoggedIn = true;
        res.redirect("/");
    } else {
        res.send("Invalid username or password. <a href='/login'>Try again</a>");
    }
});

// GET route for loggin out
app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect("/");
        }
        res.clearCookie('connect.sid'); // clears the session cookie
        res.redirect("/");
    });
});

// A protected route for creating posts
app.get("/create-post", requireLogin, (req, res) => {
    // for now, just a placeholder page
    res.send("<h1>Create New Post</h1><p>You can only see this because you are logged in</p><a href='/'>Go Home</a>");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

