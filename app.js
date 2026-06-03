var fs = require('fs');
const express = require("express");
const app = express();
// app.use(express.static('public'));
app.use(express.json()); //  json encoded body
app.use(express.urlencoded({ extended: true })); //  application/x-www-form-urlencoded body

//////////////////////////////// cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Max-Ag", "86400");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, content ,X-Requested-With ,Content-Type,X-Custom-Header, Accept, Authorization,BING_API_HEADER"
  );
  next();
});
app.use(express.static('public'));
////////////////////////////////////////////////////////
app.listen(3000, () => {
  console.log("listening3000");
});
////////////////////////////////////////////////////////////

////  customer=[1090,4030,1363,1365]

////////////////////////////////////////////////////////////////////////


app.get("/", (req, res) => {
  res.send("hello 200");
});

