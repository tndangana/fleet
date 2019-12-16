const Drivers = require('../model/drivers');



module.exports = (app) => {
    // create 
    app.post('/api/c', async (req, res) => {

        return await Drivers.create({

            vehicle_id: req.body.vehicle_id,
            company_id: req.body.company_id,
            user_id: req.body.user_id,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((driver) => res.status(201).send(driver))
            .catch(error => res.status(400).send(error));
    }),

        //    get all
        app.get('/api/c', async (req, res) => {

            return await Drivers.findAll()
                .then((driver) => {
                    res.json(driver);
                }).catch(error => res.status(400).send(error));
        }),

        //  update
        app.put('/api/c/:id', async (req, res) => {

            return await Drivers.update({
                vehicle_id: req.body.vehicle_id,
                company_id: req.body.company_id,
                user_id: req.body.user_id,
                updated_by: req.body.user_id
            },
                { where: { driver_id: req.params.id } }
            ).then((driver) => {
                res.status(200).send(driver);
                console.log(driver)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),

        // delete by id

        app.delete('/api/c/:id', async (req, res) => {
            return await Drivers.destroy({
                where: {
                    driver_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${driver_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),

        // get one by Id 
        app.get('/api/c/:id', async (req, res) => {
            const id = req.params.id;
            return Drivers.findAll({
                where: { driver_id: id }
            }).then(driver => {
                res.json(driver);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



