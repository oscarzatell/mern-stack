const express = require("express");
const cors = require("cors");
const app = express();

//Setings
app.set("port", process.env.PORT || 4000);

//Middlewars
app.use(cors());
app.use(express.json());

//Routes
app.get("/api/users", (req, res) => res.send("Users routes"));
app.get("/api/notes", (req, res) => res.send("Notes routes"));

module.exports = app;
