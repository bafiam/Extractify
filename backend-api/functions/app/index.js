module.exports = function (app, db, pdfUtil, currentDate) {
  app.post("/upload", async (req, res) => {
    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" });
    }

    const myFile = req.files.file;

    let fileStatus = "SUCCESS";

    myFile.mv(`${__dirname}/public/${myFile.name}`, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ msg: "file move error" });
      }

      let pdf_path = `${__dirname}/public/${myFile.name}`;
      pdfUtil.pdfToText(pdf_path, async (err, data) => {
        if (data === null) {
          fileStatus = "FAIL";
        }
        if (data) {
          processed = true;

          const db_data = {
            title: myFile.name,
            body: data,
            created: currentDate,
          };

          try {
            db.collection("pdfCollection")
              .doc(`${myFile.name}`)
              .set(db_data)
              .then(() => {
                res.status(200).send({
                  status: fileStatus,
                  file: myFile.name,
                });
                return;
              });
          } catch (error) {
            console.log(error);
          }
        }
      });
    });
  });
  app.get("/upload", async(req, res) => {
    try {
      const data = []
      const results = await db.collection("pdfCollection").orderBy("created", "desc").get()
      results.forEach(doc => {
        data.push(doc.data())
      });
      res.send({status: "SUCCESS",file: data})
    } catch (error) {
     console.log(error)
      
    }
    ;
  });
};
