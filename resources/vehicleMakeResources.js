const VehicleMake = require('../model/vehicleMake');
const authorize = require("../middleware/auth");




module.exports = (app) => {
// create
    app.post('/api/vm', authorize,async (req, res) => {

        return await VehicleMake.create({
            vehicle_make: req.body.vehicle_make,
            vehicle_make_logo_path: req.body.vehicle_make_logo_path,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((vehicleMake) => res.status(201).send(vehicleMake))
            .catch(error => res.status(400).send(error));
    }),
    // get all
        app.get('/api/vm', authorize,async (req, res) => {

            return await VehicleMake.findAll()
                .then((vehicleMake) => {
                    res.json(vehicleMake);
                }).catch(error => res.status(400).send(error));
        }),
// update
        app.put('/api/vm/:id', authorize,async (req, res) => {

            return await VehicleMake.update({
                vehicle_make: req.body.vehicle_make,
                vehicle_make_logo_path: req.body.vehicle_make_logo_path,
                updated_by: req.body.user_id
            },

                { where: { make_id: req.params.id } }
            ).then((vehicleMake) => {
                res.status(200).send(vehicleMake);
                console.log(vehicleMake)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),
// destroy
        app.delete('/api/vm/:id', authorize,async (req, res) => {

            return await VehicleMake.destroy({
                where: {
                    make_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${make_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),

        // find one by Id
        app.get('/api/vm/:id', authorize,async (req, res) => {
            const id = req.params.id;
            return VehicleMake.findAll({
                where: { make_id: id }
            }).then(vehicleMake => {
                res.json(vehicleMake);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



