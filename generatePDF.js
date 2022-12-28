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
    const arrayOfPics = body['Pictures'].split(" , ");
    if (arrayOfPics.length > 1) {
        for (let i = 0; i <= arrayOfPics.length; i++) {
            const logo = await fetchImage(arrayOfPics[i]);
            doc.image(logo, { width: 300, align: "center" });
        }
    } else {
        const logo = await fetchImage(arrayOfPics[0]);
        doc.image(logo, { align: "center" });
    }

    doc.end();
}

export {generatePDF};