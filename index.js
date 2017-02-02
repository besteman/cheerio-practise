const express = require('express');
const body_parser = require('body-parser');
const method_override = require("method-override");

const app = epress;

const port = 9000;

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});