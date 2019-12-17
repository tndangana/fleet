

module.exports =(app)=> {

    require('../resources/userResource')(app);
    require('../resources/companyResource')(app);
    require('../resources/departmentResources')(app);
    require('../resources/driverResources')(app)
    require('../resources/fuelRequestPaymentResources')(app)
    require('../resources/fuelRequestReceiptAttachmentResources')(app)
    require('../resources/projectResource')(app)
    require('../resources/userResource')(app)
    require('../resources/vehicleModelResource')(app)
    require('../resources/vehicleOwnershipTypeResources')(app)
    require('../resources/vehicleResources')(app)
    require('../resources/vehicleMakeResources')(app)
    require('../resources/vehicleTypeResource')(app)
    require('../resources/fuelRequestsResource')(app)
    require('../resources/fuelTypesResources')(app)


    
}


