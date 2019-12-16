const Vehicle = require('../model/vehicles');



module.exports = (app) => {

    app.post('/api/vh', async (req, res) => {

        return await Vehicle.create({
            license_plate: req.body.license_plate,
            odometer_value: req.body.odometer_value,
            vehicle_make_id: req.body.vehicle_make_id,
            vehicle_model_id: req.body.vehicle_model_id,
            vehicle_model_year: req.body.vehicle_model_year,
            vehicle_ownership_id: req.body.vehicle_ownership_id,
            fuel_type_id: req.body.fuel_type_id,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((vehicle) => res.status(201).send(vehicle))
            .catch(error => res.status(400).send(error));
    }),
        app.get('/api/vh', async (req, res) => {

            return await Vehicle.findAll()
                .then((vehicle) => {
                    res.json(vehicle);
                }).catch(error => res.status(400).send(error));
        }),

        app.put('/api/vh/:id', async (req, res) => {

            return await Vehicle.update({
                license_plate: req.body.license_plate,
                odometer_value: req.body.odometer_value,
                vehicle_make_id: req.body.vehicle_make_id,
                vehicle_model_id: req.body.vehicle_model_id,
                vehicle_model_year: req.body.vehicle_model_year,
                vehicle_ownership_id: req.body.vehicle_ownership_id,
                fuel_type_id: req.body.fuel_type_id,
                updated_by: req.body.user_id
            },

                { where: { vehicle_id: req.params.id } }
            ).then((vehicle) => {
                res.status(200).send(vehicle);
                console.log(vehicle)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),

        app.delete('/api/vh/:id', async (req, res) => {

            return await Vehicle.destroy({
                where: {
                    vehicle_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${vehicle_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),

        app.get('/api/vh/:id', async (req, res) => {
            const id = req.params.id;
            return Vehicle.findAll({
                where: { vehicle_id: id }
            }).then(vehicle => {
                res.json(vehicle);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



