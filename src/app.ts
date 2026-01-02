import express, { Request, Response } from "express";
import { postRouter } from "../modules/post/post.router";

const app = express();

app.use("/post", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

export default app;
