const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());

// get
app.get("/biodata", (req, res) => {
  const biodata = {
    nama: req.query.name,
    "tempat-lahir": req.query["tempat-lahir"],
    "tanggal-lahir": req.query["tanggal-lahir"],
    alamat: req.query.alamat,
  };
  res.json(biodata);
});

// post
app.post("/biodata", (req, res) => {
  const { name, "tempat-lahir": tempatLahir, "tanggal-lahir": tanggalLahir, alamat } = req.body;
  const biodata = {
    nama: name,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat: alamat,
  };
  res.json(biodata);
});

app.listen(port, () => {
  console.log("listening on port " + port);
});

// URL Parameter :
// http://127.0.0.1:8000/biodata?name=susi&tempat-lahir=wonosobo&tanggal-lahir=12081990&alamat=Jl.%20Gatot%20Subroto%20No.%2006
