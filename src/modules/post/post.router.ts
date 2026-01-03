import { Router } from "express";
import { UserRoles } from "../../constant/auth";
import auth from "../../middleware/auth";
import { PostController } from "./post.controller";

const router = Router();

router.post("/", auth(UserRoles.USER), PostController.createPost);

router.get("/", PostController.getAllPost);

export const postRouter = router;
