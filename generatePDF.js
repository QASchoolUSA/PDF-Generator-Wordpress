import PDFDocument from "pdfkit";
import fs from "fs";

function generatePDF(body) {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream('output.pdf'));

    for (const key in body) {
        doc.fontSize(16).text(key, {underline: true});
        doc.moveDown().fontSize(12).text(body[key]);
    }
    doc.end();
}

export {generatePDF};