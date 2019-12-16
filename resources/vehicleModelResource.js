const VehicleModels = require('../model/vehicleModels');



module.exports = (app) => {
// create
    app.post('/api/vms', async (req, res) => {

        return await VehicleModels.create({
            model_name: req.body.model_name,
            make_id: req.body.make_id,
            created_by: req.body.created_by,
            updated_by: req.body.updated_by

        }).then((vehicleModels) => res.status(201).send(vehicleModels))
            .catch(error => res.status(400).send(error));
    }),

    // get all
        app.get('/api/vms', async (req, res) => {

            return await VehicleModels.findAll()
                .then((vehicleModels) => {
                    res.json(vehicleModels);
                }).catch(error => res.status(400).send(error));
        }),

        // update
        app.put('/api/vms/:id', async (req, res) => {

            return await VehicleModels.update({

                model_name: req.body.model_name,
                make_id: req.body.make_id,
                updated_by: req.body.updated_by

            },

                { where: { vehicle_model_id: req.params.id } }
            ).then((vehicleModels) => {
                res.status(200).send(vehicleModels);
                console.log(vehicleModels)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),
// destroy
        app.delete('/api/vms/:id', async (req, res) => {

            return await VehicleModels.destroy({
                where: {
                    vehicle_model_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${vehicle_model_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),
// find one by id
        app.get('/api/vms/:id', async (req, res) => {
            const id = req.params.id;
            return VehicleModels.findAll({
                where: { vehicle_model_id: id }
            }).then(vehicleModels => {
                res.json(vehicleModels);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



