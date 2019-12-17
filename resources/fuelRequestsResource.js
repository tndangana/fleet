const FuelRequests = require('../model/fuelRequests');
const authorize = require("../middleware/auth");





module.exports = (app) => {

    app.post('/api/fq',authorize, async (req, res) => {

        return await FuelRequests.create({

            department_id: req.body.department_id,
            project_id: req.body.project_id,
            vehicle_id: req.body.vehicle_id,
            paybill_number: req.body.paybill_number,
            driver_id: req.body.driver_id,
            current_odometer: req.body.current_odometer,
            fuel_vendor: req.body.fuel_vendor,
            fuel_quantity: req.body.fuel_quantity,
            price_per_quantity: req.body.price_per_quantity,
            is_approved: req.body.is_approved,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((fuelRequests) => res.status(201).send(fuelRequests))
            .catch(error => res.status(400).send(error));
    }),
        app.get('/api/fq', authorize,async (req, res) => {

            return await FuelRequests.findAll()
                .then((fuelRequests) => {
                    res.json(fuelRequests);
                }).catch(error => res.status(400).send(error));
        }),

        app.put('/api/fq/:id',authorize, async (req, res) => {

            return await FuelRequests.update({
                department_id: req.body.department_id,
                project_id: req.body.project_id,
                vehicle_id: req.body.vehicle_id,
                paybill_number: req.body.paybill_number,
                driver_id: req.body.driver_id,
                current_odometer: req.body.current_odometer,
                fuel_vendor: req.body.fuel_vendor,
                fuel_quantity: req.body.fuel_quantity,
                price_per_quantity: req.body.price_per_quantity,
                is_approved: req.body.is_approved,
                updated_by: req.body.user_id
            },

                { where: { fuel_request_id: req.params.id } }
            ).then((fuelRequests) => {
                res.status(200).send(fuelRequests);
                console.log(fuelRequests)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),

        app.delete('/api/fq/:id',authorize, async (req, res) => {

            return await FuelRequests.destroy({
                where: {
                    fuel_request_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${fuel_request_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),

        app.get('/api/fq/:id',authorize, async (req, res) => {
            const id = req.params.id;
            return FuelRequests.findAll({
                where: { fuel_request_id: id }
            }).then(fuelRequests => {
                res.json(fuelRequests);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



