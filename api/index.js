const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const customerRoutes = require("./routes/customerRoutes.js");
app.use("/api/customer/", customerRoutes);
const personRoutes = require("./routes/personRoutes.js");
app.use("/api/customer/", personRoutes);
const projectRoutes = require("./routes/projectRoutes.js");
app.use("/api/projects/", projectRoutes);
const subtaskRoutes = require("./routes/subtasksRoutes.js");
app.use("/api/subtask/", subtaskRoutes);
const tasksRoutes = require("./routes/tasksRoutes.js");
app.use("/api/tasks/", tasksRoutes);
const teamRoutes = require("./routes/teamRoutes.js");
app.use("/api/team/", teamRoutes);

//we can also use const router = require("./routes/productRoutes") but that means alll routes will not get the /product prefix

app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
