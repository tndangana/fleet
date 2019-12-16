const User = require('../model/user');



module.exports = (app) => {
// create
  app.post('/api/u', async (req, res) => {

    return await User.create({
      username: req.body.username,
      email_address: req.body.email_address,
      contact: req.body.contact,
      user_password: req.body.user_password,
      is_active: req.body.is_active
    }).then((user) => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }),

  // get all
    app.get('/api/u', async (req, res) => {

      return await User.findAll()
        .then((users) => {
          res.json(users);
        }).catch(error => res.status(400).send(error));
    }),
// update
    app.put('/api/u/:id', async (req, res) => {

      return await User.update({
        username: req.body.username,
        email_address: req.body.email_address,
        contact: req.body.contact,
        user_password: req.body.user_password,
        is_active: req.body.is_active
      },

        { where: { user_id: req.params.id } }
      ).then((user) => {
        res.status(200).send(user);
        console.log(user)
      }).catch(function (err) {
        console.log("update failed with error: " + err);
        return 0;
      });

    }),
// destroy
    app.delete('/api/u/:id', async (req, res) => {
        
      return await User.destroy({
        where: {
          user_id: req.params.id
        }
      }).then(() => {
        console.log(`deleted record with id ${user_id}`);
      }).catch(function (err) {
        console.log("delete failed with error: " + err);
        return 0;
        // handle error;
      })
    }),

    // find one by Id
    app.get('/api/u/:id', async (req,res)=>{
      const id = req.params.id;
       return User.findAll({
        where: { user_id: id }
      }).then(user => {
        res.json(user);
      }).catch(function (err) {
        console.log("delete failed with error: " + err);
        return 0;
        // handle error;
      })
    });

}



