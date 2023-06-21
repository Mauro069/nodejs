const express = require("express");
const db = require("./database/db");
const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken")
const cors = require('cors')
const app = express();

const corsOptions = {
  origin: ["https://encontrarte.com.ar/","http://localhost:4000"],
  methods: ["OPTIONS", "GET", "POST"],
  credentials: true,
  preflightContinue: false
};

app.use(cors());

app.use(express.json());


app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);


const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});

module.exports = app;
