const Company = require('../model/companies');
const authorize = require("../middleware/auth");




module.exports = (app) => {
    // create
    app.post('/api/c',authorize, async (req, res) => {

        return await Company.create({
            company_name: req.body.company_name,
            created_by: req.body.created_by,
            updated_by: req.body.updated_by
        }).then((company) => res.status(201).send(company))
            .catch(error => res.status(400).send(error));
    }),
        //   get all
        app.get('/api/c',authorize,async (req, res) => {

            return await Company.findAll()
                .then((company) => {
                    res.json(company);
                }).catch(error => res.status(400).send(error));
        }),
        // update
        app.put('/api/c/:id',authorize,async (req, res) => {

            return await Company.update({
                company_name: req.body.company_name,
                updated_by: req.body.updated_by
            },

                { where: { company_id: req.params.id } }
            ).then((company) => {
                res.status(200).send(company);
                console.log(Company)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),
        // delete
        app.delete('/api/c/:id', authorize,async (req, res) => {

            return await Company.destroy({
                where: {
                    company_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${company_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),
        //  get one by id 
        app.get('/api/c/:id', authorize,async (req, res) => {
            const id = req.params.id;
            return Company.findAll({
                where: { company_id: id }
            }).then(company => {
                res.json(company);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



