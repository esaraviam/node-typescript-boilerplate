import express from "express";

const app: express.Application = express();

app.get("/", (request: express.Request, response: express.Response) => {
  response.send("Hello World");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
