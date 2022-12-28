import PDFDocument from "pdfkit";
import fs from "fs";

function generatePDF(body) {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream('output.pdf'));

    for (const key in body) {
        if(body[key] === '') {
            doc.fontSize(16).text(key, { align: "center" });
        } else {
            doc.text(key + ": " + body[key]);
        }
    }
    doc.end();
}

export {generatePDF};