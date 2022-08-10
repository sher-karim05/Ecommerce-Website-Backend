const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const { resolveContent } = require("nodemailer/lib/shared");
const Role = require("./models/role.model");
dotenv.config({ path: "backend/config/config.env" });
const port = process.env.PORT || 8080;

//Connect DB
connectDatabase();

app.listen(port, () => {
  //unhandled promise Rejection
  process.on("unhandledRejection", (err) => {
    console.log(`Error ${err.message}`);
    server.close(() => {
      process.exit(1);
    });
  });
  console.log(`Server is running on port ${port}`);

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user",
        }).save((err) => {
          if (err) {
            console.log("error", err);
          }
          console.log("Added 'user' to roles collection");
        });

        new Role({
          name: "moderator",
        }).save((err) => {
          if (err) {
            console.log("error", err);
          }

          console.log("Added 'moderator' to roles collection");
        });

        new Role({
          name: "admin",
        }).save((err) => {
          if (err) {
            console.log("error", arr);
          }

          console.log("Added 'admin to roles collection'");
        });
      }
    });
  }

  //Uncaught Exception
  process.on("uncaughtException", (err) => {
    console.log(`Error${err.message}`);
    console.log("Shutting down the server due to uncaught exception ");
    process.exit(1);
  });
});
