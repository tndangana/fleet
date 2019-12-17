const FuelRequestReceiptAttachment = require('../model/fuelRequestReceiptAttachment');
const authorize = require("../middleware/auth");



module.exports = (app) => {

    app.post('/api/fr',authorize, async (req, res) => {

        return await FuelRequestReceiptAttachment.create({

            attachment_path: req.body.attachment_path,
            fuel_request_id: req.body.fuel_request_id,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((fuelRequestReceiptAttachment) => res.status(201).send(fuelRequestReceiptAttachment))
            .catch(error => res.status(400).send(error));
    }),

        app.get('/api/fr',authorize, async (req, res) => {

            return await FuelRequestReceiptAttachment.findAll()
                .then((fuelRequestReceiptAttachment) => {
                    res.json(fuelRequestReceiptAttachment);
                }).catch(error => res.status(400).send(error));
        }),


        app.put('/api/fr/:id',authorize, async (req, res) => {

            return await FuelRequestReceiptAttachment.update({

                attachment_path: req.body.attachment_path,
                fuel_request_id: req.body.fuel_request_id,
                updated_by: req.body.user_id

            },
                { where: { attachment_id: req.params.id } }
            ).then((fuelRequestReceiptAttachment) => {
                res.status(200).send(fuelRequestReceiptAttachment);
                console.log(fuelRequestReceiptAttachment)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });
        }),

        app.delete('/api/fr/:id', authorize,async (req, res) => {
            return await FuelRequestReceiptAttachment.destroy({
                where: {
                    attachment_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${attachment_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),


        app.get('/api/fr/:id', authorize,async (req, res) => {
            const id = req.params.id;
            return FuelRequestReceiptAttachment.findAll({
                where: { attachment_id: id }
            }).then(fuelRequestReceiptAttachment => {
                res.json(fuelRequestReceiptAttachment);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



