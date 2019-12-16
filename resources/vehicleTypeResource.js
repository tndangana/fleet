const VehicleType = require('../model/VehicleType');



module.exports = (app) => {

    app.post('/api/vtp', async (req, res) => {

        return await VehicleType.create({
            vehicle_type: req.body.vehicle_type,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((vehicle_type) => res.status(201).send(vehicle_type))
            .catch(error => res.status(400).send(error));
    }),
        app.get('/api/vtp', async (req, res) => {

            return await VehicleType.findAll()
                .then((vehicle_type) => {
                    res.json(vehicle_type);
                }).catch(error => res.status(400).send(error));
        }),

        app.put('/api/vtp/:id', async (req, res) => {

            return await VehicleType.update({
                vehicle_type: req.body.vehicle_type,
                updated_by: req.body.user_id
            },

                { where: { vehicle_type_id: req.params.id } }
            ).then((vehicle_type) => {
                res.status(200).send(vehicle_type);
                console.log(vehicle_type)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),

        app.delete('/api/vtp/:id', async (req, res) => {

            return await VehicleType.destroy({
                where: {
                    vehicle_type_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${vehicle_type_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),

        app.get('/api/vtp/:id', async (req, res) => {
            const id = req.params.id;
            return VehicleType.findAll({
                where: { vehicle_type_id: id }
            }).then(vehicle_type => {
                res.json(vehicle_type);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



