const Department = require('../model/departments');



module.exports = (app) => {
         // create
    app.post('/api/d', async (req, res) => {

        return await Department.create({

            department: req.body.department,
            created_by: req.body.created_by,
            updated_by: req.body.updated_by

        }).then((department) => res.status(201).send(department))
            .catch(error => res.status(400).send(error));
    }),
        // get all
        app.get('/api/d', async (req, res) => {

            return await Department.findAll()
                .then((department) => {
                    res.json(department);
                }).catch(error => res.status(400).send(error));
        }),
        // update
        app.put('/api/d/:id', async (req, res) => {

            return await Department.update({
                department: req.body.department,
                updated_by: req.body.updated_by
            },
                { where: { department_id: req.params.id } }
            ).then((department) => {
                res.status(200).send(department);
                console.log(department)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),
        // delete
        app.delete('/api/d/:id', async (req, res) => {

            return await Department.destroy({
                where: {
                    department_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${department_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),
        // get one by id

        app.get('/api/d/:id', async (req, res) => {
            const id = req.params.id;
            return Department.findAll({
                where: { department_id: id }
            }).then(department => {
                res.json(department);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



