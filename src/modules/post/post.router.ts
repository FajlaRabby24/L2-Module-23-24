import { NextFunction, Request, Response, Router } from "express";

import { UserRoles } from "../../constant/auth";
import { auth as betterAuth } from "../../lib/auth";
import { PostController } from "./post.controller";

const router = Router();

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: string;
        emailVerified: boolean;
      };
    }
  }
}

// const auth = async(req: Request, res: Response, next: NextFunction  ) => {

//  }

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const session = await betterAuth.api.getSession({
      headers: req.headers as any,
    });

    if (!session) {
      return res.status(401).json({
        success: false,
        message: "Your are not authorized!",
      });
    }

    if (!session.user.emailVerified) {
      return res.status(403).json({
        seuccess: false,
        message: "Email verification requred. Please verify your email!",
      });
    }

    req.user = {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      emailVerified: session.user.emailVerified,
      role: session.user.role!,
    };

    if (roles.length && !roles.includes(req.user.role as UserRoles)) {
      return res.status(403).json({
        seuccess: false,
        message:
          "Forbidden! You don't have permission to access this resources!",
      });
    }
    console.log(session);
    next();
  };
};

router.post("/", auth(UserRoles.USER), PostController.createPost);

router.get("/", PostController.getAllPost);

export const postRouter = router;
