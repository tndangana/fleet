const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
require('dotenv').config()
const bcrypt = require("bcrypt");


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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

require('./resources/userResource')(app);
require('./resources/companyResource')(app);
require('./resources/departmentResources')(app);
require('./resources/driverResources')(app)
require('./resources/fuelRequestPaymentResources')(app)
require('./resources/fuelRequestReceiptAttachmentResources')(app)
require('./resources/projectResource')(app)
require('./resources/userResource')(app)
require('./resources/vehicleModelResource')(app)
require('./resources/vehicleOwnershipTypeResources')(app)
require('./resources/vehicleResources')(app)
require('./resources/vehicleMakeResources')(app)
require('./resources/vehicleTypeResource')(app)
require('./resources/fuelRequestsResource')(app)
require('./resources/fuelTypesResources')(app)


// define a simple route
app.get('/', (req, res) => {
  res.json({ "message": "Welcome." });
});

// listen for requests
app.listen(2507, () => {
  console.log(`Server is listening on port ${2507}`);
});
