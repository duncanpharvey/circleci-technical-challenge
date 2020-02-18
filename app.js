const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/images", express.static(__dirname + "/images"));

app.listen(process.env.PORT || 5000); // use port if provided, otherwise use 5000