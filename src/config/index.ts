import dotenv from "dotenv";
dotenv.config();

const config = {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
  better_auth_secret: process.env.BETTER_AUTH_SECRET,
  better_auth_url: process.env.BETTER_AUTH_URL,
  app_url: process.env.APP_URL,
};

export default config;
