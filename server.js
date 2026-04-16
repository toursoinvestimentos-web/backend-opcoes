const express = require("express");
const app = express();

app.get("/preco", (req, res) => {
  res.json({
    codigo: "BBASE264",
    preco: 0.28
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});
