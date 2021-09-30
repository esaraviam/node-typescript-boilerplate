import express from "express";
import Comment, { CommentType } from "./domain/entities/Comment";

const app: express.Application = express();

app.get("/", (request: express.Request, response: express.Response) => {
  let comment: CommentType = {} as CommentType;
  comment.id = 1;
  comment.content = "Hello World";
  let commentObject: Comment = new Comment(comment);

  response.status(200).json(commentObject);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
