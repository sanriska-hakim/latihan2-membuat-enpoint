const express = require("express");
const app = express();
const port = 8000;

app.get("/biodata", (req, res) => {
  const biodata = {
    nama: req.query.name,
    "tempat-lahir ": req.query["tempat-lahir"],
    "tanggal-lahir ": req.query["tanggal-lahir"],
    alamat: req.query.alamat,
  };
  res.json(biodata);
});

app.listen(port, () => {
  console.log("listening on port  " + port);
});

// URL Parameter :
// http://127.0.0.1/biodata?name=susi&tempat-lahir=wonosobo&tanggal-lahir=12081990&alamat=Jl.%20Gatot%20Subroto%20No.%2006
