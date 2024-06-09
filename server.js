const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");
const barDataRoutes = require('./routes/barData');
const userRoutes = require('./routes/user.routes');
const pieDataRoutes = require('./routes/pieDataRoutes');
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use("/api", dataRoutes);
app.use('/api', userRoutes);
app.use('/api', barDataRoutes);
app.use('/api', pieDataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
