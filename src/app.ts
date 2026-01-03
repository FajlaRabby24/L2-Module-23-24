import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { Request, Response } from "express";
import config from "./config";
import { auth } from "./lib/auth";
import { postRouter } from "./modules/post/post.router";

const app = express();

app.use(
  cors({
    origin: config.app_url || "http://localhost:4000", // client side url
    credentials: true,
  })
);
app.use(express.json());
app.all("/api/auth/*spalte", toNodeHandler(auth));

app.use("/post", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

export default app;
