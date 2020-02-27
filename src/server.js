const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var sg = require("sendgrid")(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
  method: "POST",
  path: "/api/email",
  body: {
    personalizations: [
      {
        to: [
          {
            email: "danieelvaraujo@gmail.com"
          }
        ],
        subject: req.body.assunto
      }
    ],
    from: {
      email: req.body.email
    },
    content: [
      {
        type: "text/plain",
        value: req.body.message
      }
    ]
  }
});

//With promise
sg.API(request)
  .then(response => {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  })
  .catch(error => {
    //error is an instance of SendGridError
    //The full response is attached to error.response
    console.log(error.response.statusCode);
  });

//With callback
sg.API(request, function(error, response) {
  if (error) {
    console.log("Error response received");
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});

app.listen(process.env.PORT);
