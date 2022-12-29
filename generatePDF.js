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
async function uploadToDropbox(fileName, folderName) {
    const fileUpload = await axios.post("https://content.dropboxapi.com/2/files/upload", `@${fileName}.pdf`, {
        headers: {
            'Authorization': 'Bearer sl.BV05lG-luuNdYK4m0KnMoZJTT7vYCA2dckU71pWG1QjWrYUyE2xpXvBFLQEcWqyUz8Kj56Ye9ZKoW7q7PVlMseamS3H_L8Ag03SPs0Voxu346NI_tuqdQjQkCNnq35Msc1fMAS2kTQAN',
            'Content-Type': 'application/octet-stream',
            'Dropbox-API-Arg': `{"path":"/${folderName}/${fileName}.pdf","autorename":false}`
        }
    })
    return fileUpload.data;
}
async function generatePDF(body) {
    const doc = new PDFDocument();
    const newFileName = body.VIN + "-" + body["Maker/Model"]
    doc.pipe(fs.createWriteStream(`${newFileName}.pdf`));
    delete body.form_id
    delete body.form_name
    const header = await fetchImage("https://vehicleinspection.ca/wp-content/uploads/2022/12/header.png");
    doc.image(header, 200, 0, { align: "center" })

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
    await uploadToDropbox(newFileName, body['Customer Email']);
    fs.unlinkSync(`${newFileName}.pdf`)
}

export {generatePDF};