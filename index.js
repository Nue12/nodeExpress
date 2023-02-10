const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/userRouter");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.API_URL);

app.use(express.static("public"));

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
