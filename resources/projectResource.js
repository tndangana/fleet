const Project = require('../model/project');
const authorize = require("../middleware/auth");





module.exports = (app) => {

    app.post('/api/p',authorize, async (req, res) => {

        return await Project.create({

            project: req.body.project,
            is_active: req.body.is_active,
            department_id: req.body.department_id,
            created_by: req.body.user_id,
            updated_by: req.body.user_id

        }).then((project) => res.status(201).send(project))
            .catch(error => res.status(400).send(error));
        }),
        
        app.get('/api/p', authorize,async (req, res) => {

            return await Project.findAll()
                .then((project) => {
                    res.json(project);
                }).catch(error => res.status(400).send(error));
        }),

        app.put('/api/p/:id', authorize,async (req, res) => {

            return await Project.update({
                project: req.body.project,
                is_active: req.body.is_active,
                department_id: req.body.department_id,
                updated_by: req.body.user_id
            },

                { where: { project_id: req.params.id } }
            ).then((project) => {
                res.status(200).send(project);
                console.log(project)
            }).catch(function (err) {
                console.log("update failed with error: " + err);
                return 0;
            });

        }),

        app.delete('/api/p/:id', authorize,async (req, res) => {

            return await Project.destroy({
                where: {
                    project_id: req.params.id
                }
            }).then(() => {
                console.log(`deleted record with id ${project_id}`);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        }),

        app.get('/api/p/:id', authorize,async (req, res) => {
            const id = req.params.id;
            return Project.findAll({
                where: { project_id: id }
            }).then(project => {
                res.json(project);
            }).catch(function (err) {
                console.log("delete failed with error: " + err);
                return 0;
                // handle error;
            })
        });

}



