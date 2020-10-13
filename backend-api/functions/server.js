const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const pdfUtil = require("pdf-to-text");
const bodyParser = require("body-parser");
const path = require("path");
const serviceAccount = "./app/permissions.json";

const fs = require("fs");

// initialize express app

const app = express();
// middle ware
app.use(express.static("./public"));
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect to firebase and firestore
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://extractify-948de.firebaseio.com",
  storageBucket: "extractify-948de.appspot.com",
});
const db = admin.firestore();
const bucket = admin.storage().bucket("extractify-948de.appspot.com");
const currentDate = admin.firestore.FieldValue.serverTimestamp()
// uploaded processed files to firebase storage
var files = fs.readdirSync("./app/public");
files.forEach((file) => {
  let getFile = path.join(__dirname, `./app/public/${file}`);
  uploadFile(bucket, getFile).catch(console.error);
});

async function uploadFile(bucket, filename) {
  await bucket.upload(filename, {
    gzip: true,

    metadata: {
      cacheControl: "public, max-age=31536000",
    },
  });
  fs.unlink(filename, (err) => {
    if (err) throw err;
  });
}

// require the app with the methods
require("./app")(app, db, pdfUtil, currentDate);

app.listen(4700, () => {
  console.log("server is running at port 4700");
});

exports.app = functions.https.onRequest(app);
