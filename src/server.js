const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API status: Funcionando");
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    "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"
  );

  const msg = {
    to: "danieelvaraujo@gmail.com",
    from: req.body.email,
    subject: req.body.assunto,
    text: req.body.message,
    html: `
            <h1>Recebido email de: ${req.body.name}</h1>
            <p>Email para contato: ${req.body.email}</p>
            <h3>Assunto do email: ${req.body.assunto}</h3>
            <p>${req.body.message}</p>
            `
  };

  sendGrid
    .send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("Deu o seguinte erro: ", err);
      res.status(401).json({
        success: false
      });
    });
});

app.listen(process.env.PORT);
