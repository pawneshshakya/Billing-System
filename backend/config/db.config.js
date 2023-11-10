const mongoose = require("mongoose");

async function getConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://billingManage:12345@cluster0.vzgwisc.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
}
getConnect();
