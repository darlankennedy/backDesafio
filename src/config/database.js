require("dotenv").config();
module.exports = {
  dialect: process.env.DEALECT,
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PWA,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
};