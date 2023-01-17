import PDFDocument from "pdfkit";
import fs from "fs";
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

/*
* Function is needed to download images.
*/
async function fetchImage(src) {
    const image = await axios
        .get(src, {
            responseType: 'arraybuffer'
        })
    return image.data;
}

/*
*  Function to generate PDF from the data received from Vehicle Inspection Report Form.
*/
async function generatePDF(body) {
    const doc = new PDFDocument();
    const newFileName = body.VIN + "-" + body["Maker/Model"]
    doc.pipe(fs.createWriteStream(`${newFileName}.pdf`));
    delete body.form_id;
    delete body.form_name;
    const header = await fetchImage(process.env.HEADER_URL);
    doc.image(header, 200, 0, { align: "center" });

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
    fs.unlinkSync(`${newFileName}.pdf`)
}

export { generatePDF };