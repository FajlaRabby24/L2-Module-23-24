import dotenv from "dotenv";
dotenv.config();

const config = {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
  better_auth_secret: process.env.BETTER_AUTH_SECRET,
  better_auth_url: process.env.BETTER_AUTH_URL,
  app_url: process.env.APP_URL,
  app_user: process.env.APP_USER,
  app_pass: process.env.APP_PASS,
  google_client_id: process.env.GOOGLE_CLIENT_ID || "",
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
};

export default config;
