import { Request, Response } from "express";
import { PostService } from "./post.service";

// create post
const createPost = async (req: Request, res: Response) => {
  try {
    console.log(req.user);
    const result = await PostService.createPost(req.body);
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
