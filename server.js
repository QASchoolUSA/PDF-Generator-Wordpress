import express from "express";
import bodyParser from "body-parser";
import { generatePDF } from "./generatePDF.js";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/formSubmission', async (req, res) => {
  console.log(req.body);
  res.send('DATA RECEIVED');
  await generatePDF(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});