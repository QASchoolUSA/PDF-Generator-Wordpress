import PDFDocument from "pdfkit";
import fs from "fs";

function generatePDF(body) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('output.pdf'));

    for (const key in body) {
        if(body[key] === '' && !key.includes("Notes")) {
            doc.font('Helvetica-Bold').fontSize(16).text(key, { align: "center" }).moveDown(0.5);
        } else {
            doc.font('Helvetica').text(key + ": " + body[key]);
        }
    }
    doc.end();
}

export {generatePDF};