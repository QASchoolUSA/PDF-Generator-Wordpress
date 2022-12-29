import PDFDocument from "pdfkit";
import fs from "fs";
import axios from "axios";

const body = {
    'Customer/Vehicle Information': '',
    'Customer Email': 'nikita1@kedrov.com',
    'Customer Phone Number': '3213474518',
    Year: '2017',
    VIN: 'wefewr',
    'Maker/Model': 'werwer',
    Scanning: '',
    'Engine Scan': 'Fair condition',
    'Automatic Transmission Scan': 'Fair condition',
    'All Systems Scan': 'Fair condition',
    'Battery Life': 'Fair condition',
    Engine: '',
    'Acoustical Observation': 'OK',
    'Engine Oil': 'OK',
    'Coolant Fluid': 'OK',
    'Coolant Pressure Test': 'OK',
    Radiator: 'OK',
    'Power Steering Fluid ': 'OK',
    'Power Steering Pump': 'OK',
    'Brake Fluid': 'OK',
    'ABS Pump': 'OK',
    'Oxygen Sensors': 'OK',
    'Fuel System': 'OK',
    'Alternator Load Test': 'OK',
    Starter: 'OK',
    'Belt Drive': 'OK',
    'Accessory Belt': 'OK',
    'Valve Cover': 'OK',
    'Turbo / Supercharger Compressor': 'OK',
    'Abnormal Timing Chain Behavior': 'OK',
    'Timing Belt / Chain maintenance (owners info)': 'OK',
    'Water Pump  maintenance (owners info)': 'OK',
    'Engine Notes': '',
    Drivetrain: '',
    Transmission: 'OK',
    'Transmission Mounts': 'OK',
    'Torque Converter (Autonatic Vehicles Only)': 'OK',
    'Clutch (Manual Vehicle Only)': 'OK',
    'AWD / 4x4 System': 'OK',
    'Front Drivers Axle': 'OK',
    'Front Passengers Axle': 'OK',
    'Rear Drivers Axle': 'OK',
    'Rear Passengers Axle': 'OK',
    'Front Differential': 'OK',
    'Rear Differential': 'OK',
    Driveshaft: 'OK',
    'Driveshaft Carrier': 'OK',
    'Wheel Bearings': 'OK',
    'Rims / Mags': 'OK',
    'Front Tires': 'OK',
    'Rear Tires': 'OK',
    'Drivetrain Notes': '',
    Mechanical: '',
    'Front Driver Brake Rotor / Pads': 'OK',
    'Front Passenger Brake Rotor / Pads': 'OK',
    'Rear Drivers Brake Rotor / Pads': 'OK',
    'Rear Passenger Brake Rotor / Pads': 'OK',
    'Emergency / Parking Brake': 'OK',
    'Power Steering': 'OK',
    Alignment: 'OK',
    'Front End Suspension Assembly': 'OK',
    'Rear End Suspension Assembly': 'OK',
    'Front Shock Absorbers': 'OK',
    'Rear Shock Absorbers': 'OK',
    'Front Subframe Bushings': 'OK',
    'Rear Subframe Bushings': 'OK',
    'Engine Mounts': 'OK',
    'Hood Latch': 'OK',
    'Tailgate Latch': 'OK',
    'Exhaust Flex Pipes': 'OK',
    'Exhaust Line': 'OK',
    'Cathalytic Converter': 'OK',
    'Diesel Particular Filter': 'OK',
    Muffler: 'OK',
    'Mechanical Notes': '',
    Body: '',
    'Front Bumper': 'Like new',
    Grill: 'Like new',
    'Drivers Headlight': 'Like new',
    'Drivers Fog Lamp': 'Like new',
    'Passengers Headlight': 'Like new',
    'Passengers Fog Lamp': 'Like new',
    Hood: 'Like new',
    'Drivers Side Mirror': 'Like new',
    'Passengers Side Mirror': 'Like new',
    Windshield: 'Like new',
    'Roof Panel': 'Like new',
    'Rear windsheild': 'Like new',
    'Glass Rubber Seals': 'Like new',
    'Drivers Fender': 'Like new',
    'Drivers Front Door': 'Like new',
    'Drivers Rear Door': 'Like new',
    "Driver's Quarter Panel": 'Like new',
    'Passengers Fender': 'Like new',
    'Passengers Front Door': 'Like new',
    'Passengers Rear Door': 'Like new',
    'Passengers Quarter Panel': 'Like new',
    'Passengers Tail Light': 'Like new',
    'Drivers Tail Lights': 'Like new OK',
    Trunk: 'Like new',
    'Rear Bumper': 'Like new',
    'Passengers Rocker Panel': 'Like new',
    'Drivers Rocker Panel': 'Like new',
    Undercarriage: 'Like new',
    'Front Subframe': 'Like new',
    'Rear Subframe': 'Like new',
    'Splash Guards': 'Like new',
    'Plastic and Accessory Trims': 'Like new',
    'Engine Bay': 'Like new',
    'Body Notes': '',
    Equipment: '',
    'Drivers Headlight High / Low Beam': 'OK',
    'Passengers Headlight High / Low Beam': 'OK',
    'Fog Lights': 'OK',
    'Front Turn Indicators': 'OK',
    'Passengers Tail Lights': 'OK',
    'Rear Turn Indicators': 'OK',
    'Reverse Light': 'OK',
    'License Plate Light': 'OK',
    Horn: 'OK',
    'Electric Trunk': 'OK',
    'Spare Tire': 'OK',
    'Car Jack': 'OK',
    'Remote Key': 'OK',
    'Central Lock': 'OK',
    Alarm: 'OK',
    'Windshield Wipers': 'OK',
    'Windshield Spray ': 'OK',
    'Rear Window Wipers': 'OK',
    'Side Mirrors Adjustment': 'OK',
    'Drivers Seat Belt': 'OK',
    'Passengers Seat Belt': 'OK',
    'Rear Seat Belts': 'OK',
    Airbags: 'OK',
    'Electric Brake': 'OK',
    'ABS System': 'OK',
    'Traction Control System': 'OK',
    'Cruise Control': 'Unequipped / Not accessible',
    'Parking Assist': 'Unequipped / Not accessible',
    'Reverse Camera': 'OK',
    'Equipment Notes': '',
    Interior: '',
    'Dashboard Condition': 'Like new',
    'Steering Wheel Condition': 'Like new',
    'Steering Wheel Controls': 'OK',
    'Steering Wheel Heating': 'Unequipped / Not accessible',
    'Center Console Condition': 'Like new',
    'Center Console Controls': 'OK',
    'Gear Selector': 'Like new',
    Glovebox: 'Like new',
    Armrest: 'Like new',
    Sunroof: 'OK',
    Headliner: 'Like new',
    'Front Carpets': 'Like new',
    'Rear Carpets': 'Like new',
    'Floor Mats': 'Like new',
    'Trunk Compartment': 'Like new',
    'Front Drivers Door Card': 'Like new',
    'Front Passengers Door Card': 'Like new',
    'Rear Drivers Door Card': 'Like new',
    'Rear Passengers  Door Card': 'Like new',
    'Drivers Door Controls': 'OK',
    'Drivers Window Regulator': 'OK',
    'Passengers Window Regulator': 'OK',
    'Rear Window Regulators': 'OK',
    'Drivers Seat Condition': 'Like new',
    'Drivers Seat Heating': 'OK',
    'Passengers Seat Condition': 'Like new',
    'Passengers Seat Heating': 'OK',
    'Rear Seat Condition': 'Like new',
    'Rear Seat Heating': 'Unequipped / Not accessible',
    'Rear Windshield Heating': 'OK',
    'Air Heating': 'OK',
    'Air Conditioner': 'OK',
    'Multimedia System': 'OK',
    'Navigation System': 'OK',
    'Cellphone connectivity': 'OK',
    'Audio System': 'OK',
    'Ambient Lighting': 'OK',
    'Charger Plugs': 'OK',
    'Interior Notes': '',
    'Expert Judgment': '',
    Accidents: 'Fair condition',
    'Flood Damage': 'Poor condition',
    Odor: 'Fair condition',
    'Mileage Authenticity': 'Poor condition',
    'Market Value': 'Great condition',
    'Evaluated Taxes': 'Fair condition',
    Notes: '',
    'Upload Pictures': '',
    Pictures: 'https://vehicleinspection.ca/wp-content/uploads/elementor/forms/63abe30583b59.png',
    form_id: 'b9e3940',
    form_name: 'Onsite Vehicle Inspection Report'
}
async function fetchImage(src) {
    const image = await axios
        .get(src, {
            responseType: 'arraybuffer'
        })
    return image.data;
}

async function uploadToDropbox(fileName, folderName) {
    const fileUpload = await axios.post("https://content.dropboxapi.com/2/files/upload", '@output.pdf', {
        headers: {
            'Authorization': 'Bearer sl.BV36u6AJo--_3N_n0B5FMy-3_jLqC72hFkF3VOpHjodCKq73sg4KcnbwFdIYY9i7yhvh7utwYrzM8-R1di5KSgK9LT0rWQPwY0BAkdxP5Sqmn02-qc5cWnlSDpT0-QBfACHn0LmU-mue',
            'Content-Type': 'application/octet-stream',
            'Dropbox-API-Arg': `{"path":"/${folderName}/${fileName}.pdf","autorename":false}`
        }
    })
    return "File Upload is Done.";
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
    await uploadToDropbox("newFileName", body['Customer Email']);
    fs.unlinkSync(`${newFileName}.pdf`)
}

await generatePDF(body);

export {generatePDF};