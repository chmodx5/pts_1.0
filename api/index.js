const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// const productRoutes = require("./routes/productRoutes.js");
app.use("/api/products/", productRoutes);

//we can also use const router = require("./routes/productRoutes") but that means alll routes will not get the /product prefix

app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
