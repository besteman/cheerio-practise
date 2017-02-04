const express = require('express');
const body_parser = require('body-parser');
const method_override = require("method-override");

const app = express();

const port = 9001;

app.use(express.static(process.cwd() + "/public"));

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.text());
app.use(body_parser.json({ type: "application/vnd.api+json" }));
// Override with POST having ?_method=DELETE
app.use(method_override("_method"));

require("./routes/api-route.js")(app);
require("./routes/html-route.js")(app);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});