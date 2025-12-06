import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos da pasta "public"
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

// Porta usada pela Vercel (ou 3000 no local)
app.listen(process.env.PORT || 3000, () =>
  console.log("Servidor rodando!")
);
