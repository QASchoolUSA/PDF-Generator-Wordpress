import PDFDocument from "pdfkit";
import fs from "fs";
import axios from "axios";

async function fetchImage(src) {
    const image = await axios
        .get(src, {
            responseType: 'arraybuffer'
        })
    return image.data;
}

async function generatePDF(body) {
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
            const logo = await fetchImage(body['Pictures'][i]);
            doc.image(logo, 0, 15, { width: 300, align: "center" });
        }
    } else {
        const logo = await fetchImage(body['Pictures']);
        doc.image(logo, 0, 15, { width: 300, align: "center" });
    }

    doc.end();
}

export {generatePDF};