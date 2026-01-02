import { toNodeHandler } from "better-auth/node";
import express, { Request, Response } from "express";
import { auth } from "./lib/auth";
import { postRouter } from "./modules/post/post.router";

const app = express();

app.use(express.json());
app.all("/api/auth/*spalte", toNodeHandler(auth));

app.use("/post", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

export default app;
