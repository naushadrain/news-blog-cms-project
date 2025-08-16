const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configuration/connection");
const path = require("path");
const expressLayout = require("express-ejs-layouts");

// routes
const homeRoute = require("./routes/frontend.route");
const adminRoute = require("./routes/admin.route");

dotenv.config();
connectDB(); // comment out if DB is not ready

const app = express();

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// layouts
app.use(expressLayout);
app.set("layout", "layout"); // default site layout: views/layout.ejs

// static
app.use(express.static(path.join(__dirname, "public")));

// frontend routes
app.use("/", homeRoute);

// admin layout middleware (applies admin layout to all /admin pages)
app.use("/admin", (req, res, next) => {
    res.locals.layout = "admin/layout"; // will use views/admin/layout.ejs
    next();
});

// admin routes
app.use("/admin", adminRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`);
});
