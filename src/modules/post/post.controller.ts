import { Request, Response } from "express";
import { PostService } from "./post.service";

// create post
const createPost = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(400).json({
        error: "Unauthorized",
      });
    }

    const result = await PostService.createPost(req.body, req.user.id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      error: "post creation failed",
      details: error,
    });
  }
};

// get all post
const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getAllPost();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "something went wrong",
      details: error,
    });
  }
};

export const PostController = {
  createPost,
  getAllPost,
};
