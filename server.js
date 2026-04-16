const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/preco", (req, res) => {
  res.json({
    codigo: "BBASE264",
    preco: 0.28
  });
});

app.listen(PORT, () => {
  console.log("rodando na porta " + PORT);
});
