const FuelRequestPayment = require('../model/fuelRequestPayment');
const authorize = require("../middleware/auth");




module.exports = (app) => {


    // create 
    app.post('/api/f', authorize, async (req, res) => {

        return await FuelRequestPayment.create({


            amount_paid: req.body.amount_paid,
            fuel_request_id: req.body.fuel_request_id,
            paid_by: req.body.user_id,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((fuelRequestPayment) => res.status(201).send(fuelRequestPayment))
            .catch(error => res.status(400).send(error));
    }),

        // get all

        app.get('/api/f', authorize, async (req, res) => {

            return await FuelRequestPayment.findAll()
                .then((fuelRequestPayment) => {
                    res.json(fuelRequestPayment);
                }).catch(error => res.status(400).send(error));
        }),

        //  update 
        app.put('/api/f/:id', authorize, async (req, res) => {

            return await FuelRequestPayment.update({

                amount_paid: req.body.amount_paid,
                fuel_request_id: req.body.fuel_request_id,
                paid_by: req.body.user_id,
                updated_by: req.body.user_id

            },
                { where: { payment_id: req.params.id } }
            ).then((fuelRequestPayment) => {
                res.status(200).send(fuelRequestPayment);
                console.log(fuelRequestPayment)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });
        }),

        // delete by id

        app.delete('/api/f/:id', authorize, async (req, res) => {
            return await FuelRequestPayment.destroy({
                where: {
                    payment_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${payment_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),

        //  get one by id 
        app.get('/api/f/:id', authorize, async (req, res) => {
            const id = req.params.id;
            return FuelRequestPayment.findAll({
                where: { payment_id: id }
            }).then(fuelRequestPayment => {
                res.json(fuelRequestPayment);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



