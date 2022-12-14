const express = require("express");
const route = require('./routes/routes');
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://PradeepPatil:vp0T2toXsM1QqQAo@cluster0.h3sgz2m.mongodb.net/Pradeep8379-db",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err))
  

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});