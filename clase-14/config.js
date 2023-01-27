import dotenv from "dotenv";

dotenv.config();

export default {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  DB_NAME: process.env.DB_NAME || '',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_PORT: process.env.DB_PORT || '',
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  EMAIL_USERNAME: process.env.EMAIL_USERNAME || '',
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',
}
