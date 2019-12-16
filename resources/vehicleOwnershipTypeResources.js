 const VehicleOwnershipType = require('../model/vehicleOwnershipType');



module.exports = (app) => {

    app.post('/api/vot', async (req, res) => {

        return await VehicleOwnershipType.create({

            ownership_type: req.body.ownership_type,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((vehicleOwnershipType) => res.status(201).send(vehicleOwnershipType))
            .catch(error => res.status(400).send(error));
    }),
        app.get('/api/vot', async (req, res) => {

             return await VehicleOwnershipType.findAll()
                .then((ownership) => {
                    res.json(ownership);
                }).catch(error => res.status(400).send(error));
        }),

        app.put('/api/vot/:id', async (req, res) => {

            return await VehicleOwnershipType.update({
                ownership_type: req.body.ownership_type,
                updated_by: req.body.user_id

            },
                { where: { ownership_type_id: req.params.id } }
            ).then((ownership) => {
                res.status(200).send(ownership);
                console.log(ownership)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),

        app.delete('/api/vot/:id', async (req, res) => {

            return await VehicleOwnershipType.destroy({
                where: {
                    ownership_type_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${ownership_type_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),

        app.get('/api/vot/:id', async (req, res) => {
            const id = req.params.id;
            return VehicleOwnershipType.findAll({
                where: { ownership_type_id: id }
            }).then(ownership => {
                res.json(ownership);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



