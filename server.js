import express from "express";
import bodyParser from "body-parser";
import { generatePDF } from "./generatePDF.js";

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/formSubmission', async (req, res) => {
  console.log(req.body);
  res.send('Thanks for data!');
  await generatePDF(req.body);
});

app.get('/healthCheck', async (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});