const mongoose = require("mongoose");
const app = require("./app");
const DB_HOST =
  "mongodb+srv://Rick:RickSanchez013@cluster0.ds26vl4.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
