const FuelTypes = require('../model/fuelTypes');



module.exports = (app) => {

    app.post('/api/ft', async (req, res) => {

        return await FuelTypes.create({

            fuel_type: req.body.fuel_type,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

            })
            .then((fuelTypes) => res.status(201).send(fuelTypes))
            .catch(error => res.status(400).send(error));
       }),

        app.get('/api/ft', async (req, res) => {

            return await FuelTypes.findAll()
                .then((fuelTypes) => {
                    res.json(fuelTypes);
                })
                .catch(error => res.status(400).send(error));
        }),

        app.put('/api/ft/:id', async (req, res) => {

            return await FuelTypes.update({
                fuel_type: req.body.fuel_type,
                updated_by: req.body.user_id
            },
                { where: { fuel_type_id: req.params.id } }

            ).then((fuelTypes) => {
                res.status(200).send(fuelTypes);
                console.log(fuelTypes)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),


        app.delete('/api/ft/:id', async (req, res) => {

            return await FuelTypes.destroy({
                where: {
                    fuel_type_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${fuel_type_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),


        app.get('/api/ft/:id', async (req, res) => {
            const id = req.params.id;
            return FuelTypes.findAll({
                where: { fuel_type_id: id }
            }).then(fuelTypes => {
                res.json(fuelTypes);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



