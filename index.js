const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
require('dotenv').config()
const bcrypt = require("bcrypt");

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



// user.sync();
// companies.sync();
// departments.sync();
// project.sync();
// VehicleMake.sync();
// VehicleType.sync();
// VehicleModel.sync();
// vehicleOwnershipType.sync();
// fuelTypes.sync();
// Vehicles.sync();
// drivers.sync();
// fuelRequests.sync();
// fuelRequestReceiptAttachment.sync()
// fuelRequestPayment.sync();

// ____________________________________________________________________________________users______________________________________________________________
// user.bulkCreate([
//   {
//     username:'tonderai',
//     email_address:'ndangana8@gmail.com',
//     contact:'263772275148',
//     user_password:'Password@!!',
//     is_active:true

//   },
//   {
//     username:'kudakwashe',
//     email_address:'majoni.kay@gmail.com',
//     contact:'263783476345',
//     user_password:'Pass34wwssword!!',
//     is_active:false

//   },
//   {
//     username:'matsika',
//     email_address:'matsika@gmail.com',
//     contact:'0882376345',
//     user_password:'Pas56qsweeeeeeeeord!!',
//     is_active:true

//   }]
// ).then(()=>{
//   return user.findAll();
// }).then((res)=>{
//  console.log(res);
// })






// -----------------------------------------------------Company Table ---------------------------------------------------------------

// companies.bulkCreate([{
//   company_name:'acalone',
//   created_by:1,
//   updated_by:1
// },
// {
//   company_name:'vhuka',
//   created_by:1,
//   updated_by:1
// },
// {
//   company_name:'imprint',
//   created_by:1,
//   updated_by:1
// }
// ]).then(()=>{
//   return companies.findAll();
// }).then((res)=>{
//  console.log(res);
// })


// departments.bulkCreate([{
//   department: 'Information Technology',
//   created_by: 1,
//   updated_by: 1

// }, {
//   department: 'Food Scince',
//   created_by: 2,
//   updated_by: 2

// }, {
//   department: 'Economics',
//   created_by: 2,
//   updated_by: 2

// }]).then(()=>{
//     return departments.findAll();
//   }).then((res)=>{
//    console.log(res);
//   })


// project.bulkCreate([{
//   project: 'EconDev',
//   is_active: false,
//   department_id: 1,
//   created_by: 1,
//   updated_by:1
// }]).then(() => {
//   return project.findAll();
// }).then((res) => {
//   console.log(res);
// });

// VehicleMake.bulkCreate([{
//   vehicle_make: 'Toyota',
//   vehicle_make_logo_path: '/home/tndangana/Desktop/logo.png',
//   created_by: 1,
//   updated_by: 1

// }, {
//   vehicle_make: 'Mazda',
//   vehicle_make_logo_path: '/home/mbaradza/Documents/mazda.png',
//   created_by: 1,
//   updated_by: 1

// }, {
//   vehicle_make: 'Benz',
//   vehicle_make_logo_path: '/home/kmajoni/Documents/benz.png',
//   created_by: 1,
//   updated_by: 1
// }
// ]).then(() => {
//   return VehicleMake.findAll();
// }).then((res) => {
//   console.log(res);
// });

// VehicleType.bulkCreate([{
//   vehicle_type: 'car',
//   created_by: 2,
//   updated_by: 2
// }, {
//   vehicle_type: 'minivan',
//   created_by: 1,
//   updated_by: 1
// }, {
//   vehicle_type: 'catr',
//   created_by: 1,
//   updated_by: 1
// }]).then(() => {
//   return VehicleType.findAll();
// }).then((res) => {
//   console.log(res);
// });


// VehicleModel.bulkCreate([
//   {
//     model_name: 'Bmw i20',
//     make_id: 1,
//     created_by: 1,
//     updated_by: 1

//   },
//   {
//     model_name: 'land cruiser',
//     make_id: 2,
//     created_by: 2,
//     updated_by: 2
//   },

// ]).then(() => {
//   return VehicleModel.findAll();
// }).then((res) => {
//   console.log(res);
// });

// vehicleOwnershipType.bulkCreate([
//   {
//     ownership_type: 'Rental',
//     created_by: 2,
//     updated_by: 2
//   },
//   {
//     ownership_type: 'Personal',
//     created_by: 1,
//     updated_by: 1
//   },
//   {
//     ownership_type: 'Pejrsonal',
//     created_by: 2,
//     updated_by: 1
//   }
// ]).then(() => {
//   return vehicleOwnershipType.findAll();
// }).then((res) => {
//   console.log(res);
// });

// fuelTypes.bulkCreate([
//   {
//     fuel_type: 'Diesel',
//     created_by: 1,
//     updated_by: 1
//   },
//   {
//     fuel_type: '',
//     created_by: 1,
//     updated_by: 1
//   },
//   {
//     fuel_type: 'Petrol',
//     created_by: 1,
//     updated_by: 1
//   }
// ]).then(() => {
//   return fuelTypes.findAll();
// }).then((res) => {
//   console.log(res);
// });


// Vehicles.bulkCreate([
//   {
//     license_plate: 'AAA11211',
//     odometer_value: 123,
//     vehicle_make_id: 3,
//     vehicle_model_id: 1,
//     vehicle_model_year: '1992',
//     vehicle_ownership_id: 2,
//     fuel_type_id: 1,
//     created_by: 1,
//     updated_by:1
//   },
//   {
//     license_plate: 'BBB22222',
//     odometer_value: 223,
//     vehicle_make_id: 1,
//     vehicle_model_id: 1,
//     vehicle_model_year: '1994',
//     vehicle_ownership_id: 1,
//     fuel_type_id: 1,
//     created_by: 1,
//     updated_by:1
//   },
// ]).then(() => {
//   return Vehicles.findAll();
// }).then((res) => {
//   console.log(res);
// });


// drivers.bulkCreate([
//   {
//     vehicle_id: 2,
//     company_id: 2,
//     user_id: 1,
//     created_by: 1,
//     updated_by: 2

//   },
//   {
//     vehicle_id: 2,
//     company_id: 2,
//     user_id: 2,
//     created_by: 2,
//     updated_by: 2
//   },
//   {
//     vehicle_id: 1,
//     company_id: 1,
//     user_id: 1,
//     created_by: 1,
//     updated_by: 1
//   }
// ]).then(() => {
//   return drivers.findAll();
// }).then((res) => {
//   console.log(res);
// });



// fuelRequests.bulkCreate([
//   {
//     department_id: 1,
//     project_id: 1,
//     vehicle_id: 1,
//     paybill_number: 123,
//     driver_id: 1,
//     current_odometer: 123,
//     fuel_vendor: 'Zuva',
//     fuel_quantity: 100000,
//     price_per_quantity: 1.23,
//     is_approved: true,
//     created_by: 1,
//     updated_by: 2
//   },
//   {
//     department_id: 2,
//     project_id: 1,
//     vehicle_id: 2,
//     paybill_number: 1223,
//     driver_id: 2,
//     current_odometer: 1223,
//     fuel_vendor: 'bp',
//     fuel_quantity: 1000200,
//     price_per_quantity: 1.13,
//     is_approved: false,
//     created_by: 2,
//     updated_by: 2
//   },
// ]).then(() => {
//   return fuelRequests.findAll();
// }).then((res) => {
//   console.log(res);
// });



// fuelRequestReceiptAttachment.bulkCreate([
//   {
//     attachment_path: '/home/tndangana/t.txt',
//     fuel_request_id: 1,
//     created_by: 1,
//     updated_by: 1
//   },
//   {
//     attachment_path: '/home/mabaradza/t.txt',
//     fuel_request_id: 2,
//     created_by: 2,
//     updated_by: 2
//   }
// ]).then(() => {
//   return fuelRequestReceiptAttachment.findAll();
// }).then((res) => {
//   console.log(res);
// });

// fuelRequestPayment.bulkCreate([
//   {
//     amount_paid:20.00,
//     fuel_request_id:1,
//     paid_by:2,
//     created_by:1,
//     updated_by:1

//   }
// ]).then(() => {
//   return fuelRequestPayment.findAll();
// }).then((res) => {
//   console.log(res);
// });














// define a simple route
app.get('/', (req, res) => {
  res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

// listen for requests
app.listen(2507, () => {
  console.log("Server is listening on port 3000");
});
