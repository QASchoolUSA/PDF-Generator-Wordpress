import PDFDocument from "pdfkit";
import fs from "fs";

function generatePDF(body) {
   const doc = new PDFDocument();

   doc.pipe(fs.createWriteStream('output.pdf'));

   const arrayOfPoints = Object.entries(body);
   for (const i = 1; i < 6; i++) {
      doc.text(`${arrayOfPoints[i][0]}: ${arrayOfPoints}[i][1]`, {
         align: "center"
      });
   }
   for (const i = 1; i < 6; i++) {
      doc.text(`${arrayOfPoints[i][0]}: ${arrayOfPoints}[i][1]`, {
         align: "center"
      });
   }
   // Company / Customer Information
   doc.font('Helvetica-Bold')
      .text("Customer Information", {
         align: "right"
      });
   doc.text(`Phone Number: ${body['Customer Phone Number']}`, {
      align: "right"
   });
   doc.text(`Email: ${body['Customer Email']}`, {
      align: "right"
   });
   doc.font('Helvetica-Bold')
      .text("Vehicle Information", {
         align: "center"
      })
   doc.text(`VIN: ${body['VIN']}`, {
         align: "center"
      });
   doc.text(`${body['Year']} ${body['Maker/Model']}`, {
      align: "center"
   });

   // Scanning Results
   doc.font('Helvetica-Bold')
      .text("Scanning Results", {
         align: "center"
      });
   doc.font('Helvetica');
   doc.text("Engine Scan: " + body['Engine Scan'])
   doc.text("Automatic Transmission Scan: " + body['Automatic Transmission Scan']);
   doc.text("All Systems Scan: " + body['All Systems Scan']);
   doc.text("Battery Life: " + body['Battery Life']);

   // Engine
   doc.font('Helvetica-Bold')
   .text("Engine", {
      align: "center"
   });
   doc.font('Helvetica');
   doc.text("Acoustical Observation: " + body['Acoustical Observation']);
   doc.text("Engine Oil: " + body['Engine Oil']);
   doc.text("Coolant Fluid: " + body['Coolant Fluid']);
   doc.text("Coolant Pressure Test: " + body['Coolant Pressure Test']);
   doc.text("Radiator: " + body['Radiator']);
   doc.text("Power Steering Fluid: " + body['Power Steering Fluid']);
   doc.text("Power Steering Pump: "+ body['Power Steering Pump']);
   doc.text("Brake Fluid: " + body['Brake Fluid']);
   doc.text("ABS Pump" + body['ABS Pump']);
   doc.text("Oxygen Sensors: " + body['Oxygen Sesnsors']);
   doc.text("Fuel System: " + body['Fuel System']);
   doc.text("Alternator Load Test: " + body['Alternator Load Test']);
   doc.text("Starter: " + body['Starter']);
   doc.text("Belt Drive" + body['Belt Drive']);
   doc.text("Accessory Belt: " + body['Accessory Belt']);
   doc.text("Valve Cover: " + body['Valve Cover']);
   doc.text("Turbo/Supercharger Compressor" + body['Turbo / Supercharger Compressor']);
   doc.text("Abnormal Timing Chain Behavior: " + body['Abnormal Timing Chain Behavior']);
   doc.text("Timing Belt / Chain Maintenance (owners info): " + body['Timing Belt / Chain Maintenance (owners info)']);
   doc.text("Water Pump Maintenance (owners info): " + body['Water Pump Maintenance (owners info)']);
   doc.text("Notes: " + body['Notes']);


   // Engine Header
   doc.font('Helvetica-Bold')
   .text("Drivetrain", {
      align: "center"
   });
   doc.text("Transmission: " + body['Transmission']);
   doc.text("Transmission Mounts: " + body['Transmission Mounts']);
   doc.text("Torque Converter (Autonatic Vehicles Only): " + body['Torque Converter (Autonatic Vehicles Only)']);
   doc.text("Clutch (Manual Vehicle Only): " + body['Clutch (Manual Vehicle Only)']);
   doc.text("AWD / 4x4 System: " + body['AWD / 4x4 System']);
   doc.text("Front Drivers Axle: " + body['Front Drivers Axle']);
   doc.text("Front Passengers Axle: " + body['Front Passengers Axle']);
   doc.end("Rear Drivers Axle: " + body['Rear Drivers Axle']);
}
export { generatePDF };