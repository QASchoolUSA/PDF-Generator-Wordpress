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
    if (body['Pictures'].length > 1) {
        for (let i = 0; i <= body['Pictures'].length; i++) {
            doc.image(`${body['Pictures'][i]}`, 0, 15, { width: 300, align: "center" });
        }
    } else {
        doc.image(`${body['Pictures']}`, 0, 15, { width: 300, align: "center" });
    }

    doc.end();
}

export {generatePDF};