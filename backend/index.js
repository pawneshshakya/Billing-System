const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

require("./config/db.config");

app.use("/api", require("./routes/routes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
