const express = require("express");
const userRouter = express.Router();

// middleware that is specific to this router
userRouter.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
userRouter.get("/", (req, res) => {
  res.send(JSON.stringify("Birds home page"));
});
// define the about route
userRouter.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = userRouter;
