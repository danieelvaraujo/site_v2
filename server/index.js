const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const nodemailer = require("nodemailer");

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

app.get("/api", (req, res) => {
  res.send("API status: Funcionando");
});

app.post("/api/email", (req, res) => {
  const msg = {
    service: "Gmail",
    auth: {
      user: "dvcodeacao@gmail.com", // Usuario api
      pass: "Teupaibebo1!" // Senha api
    }
  };

  let transporter = nodemailer.createTransport(msg);

  transporter
    .sendMail({
      from: req.body.email, // Email de quem enviou
      to: "danieelvaraujo@gmail.com", // Quem está recebendo
      subject: req.body.assunto, // Assunto da mensagem
      text: req.body.message, // Mensagem
      html: `
            <h1>Recebido email de: ${req.body.name}</h1>
            <p>Email para contato: ${req.body.email}</p>
            <h3>Assunto do email: ${req.body.assunto}</h3>
            <p>${req.body.message}</p>
          `
    })
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("error: ", err);
      res.status(401).json({
        success: false
      });
    });
});

app.listen(process.env.PORT);
