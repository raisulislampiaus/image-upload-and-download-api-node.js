const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://nuha:nuha123@cluster0.hhym5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });
