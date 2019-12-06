const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
require('dotenv').config()

const Vehicles = require('./model/vehicles');
const VehicleType = require('./model/VehicleType');
const VehicleMake = require('./model/vehicleMake');
const VehicleModel = require('./model/vehicleModels');
const vehicleOwnershipType = require('./model/vehicleOwnershipType');
const user = require('./model/user');
const companies = require('./model/companies');
const project = require('./model/project');
const drivers = require('./model/drivers');
const fuelRequestPayment = require('./model/fuelRequestPayment');
const fuelRequestReceiptAttachment = require('./model/fuelRequestReceiptAttachment');
const fuelRequests = require('./model/fuelRequests');
const fuelTypes = require('./model/fuelTypes');
const departments = require('./model/departments');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });






// Please when generating tables remove commented field based on number or in their respective order,this is just a test a migration will be done after confirmation that this is correct



// 1 user.sync();
// 2 companies.sync();
// 3 departments.sync();
// 4 project.sync();
// 5 VehicleMake.sync();
// 6  VehicleType.sync();
// 7 VehicleModel.sync();
// 8 vehicleOwnershipType.sync();
// 9 fuelTypes.sync();
// 10 Vehicles.sync();
// 11 drivers.sync();
// 12 fuelRequests.sync();
// 13 fuelRequestReceiptAttachment.sync()
// 14 fuelRequestPayment.sync();










// define a simple route
app.get('/', (req, res) => {
  res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

// listen for requests
app.listen(2507, () => {
  console.log("Server is listening on port 3000");
});
