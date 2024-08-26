require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected Database"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.set("view engine", "ejs");

app.use("", require("./routes/routes"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.listen(PORT, () => {
  console.log(`Server Started At http://localhost:${PORT}`);
});

const staticFiles = {
  "/css": [
    "node_modules/bootstrap/dist/css", //
    "node_modules/@fortawesome/fontawesome-free/css",
    "style",
  ],

  "/js": [
    "node_modules/bootstrap/dist/js", //
    "node_modules/jquery/dist",
    "node_modules/photoswipe/dist",
    "script",
  ],

  "/webfonts": [
    "node_modules/@fortawesome/fontawesome-free/webfonts", //
  ],
};

for (const dir in staticFiles) {
  for (const sub in staticFiles[dir]) {
    app.use(dir, express.static(path.join(__dirname, staticFiles[dir][sub])));
  }
}

app.use(favicon(path.join("icon.ico")));

app.use(express.static("upload"));

app.use("/image", express.static("image"));

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
