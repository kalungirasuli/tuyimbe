const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local").Strategy;
const database = require("./config/database");
const ejs = require("ejs");

const Uploads = require("./routes/imageUploads")
const Video = require("./routes/video")
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger");

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/",Uploads)
app.use("/",Video)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
mongoose.connect("mongodb+srv://kalungirasuli495:Kalungi2002@cluster0.i00y4ap.mongodb.net/?retryWrites=true&w=majority", { //use database.connect
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to db");
});
db.on("error", (err) => {
  console.error(err);
});
//app.use(express.static(path.join(__dirname, "public/images/facilitators")));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.listen(port, () => {
  console.log(`https:${port}`);
});
