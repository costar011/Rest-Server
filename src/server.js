import express from "express";
import bodypaser from "body-parser";
import morgan from "morgan";

const PORT = 5000;
const app = express();

app.use(morgan("dev"));
app.use(bodypaser.json());
app.use(bodypaser.urlencoded({ extended: true }));

app.post("/api", (req, res) => {
  console.log("Connecting Server");
  console.log("Connecting Server");
  console.log("Connecting Server");
});

app.listen(PORT, () => {
  console.log(`Server start ${PORT}`);
});
