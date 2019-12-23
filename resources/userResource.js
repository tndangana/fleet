const User = require('../model/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authorize = require("../middleware/auth");



module.exports = (app) => {
  // create
 
  app.post("/api/register-user", async (req, res, next) => {

   await bcrypt.hash(req.body.user_password, 10).then(async (hash) => {
     
      return await User.create({
        username: req.body.username,
        email_address: req.body.email_address,
        contact: req.body.contact,
        user_password: hash,
        is_active: req.body.is_active
      }).then((user) => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    });
  })
  ,

    // get all
 
 
    app.get('/api/u',async (req, res) => {

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
    app.delete('/api/u/:id',async (req, res) => {

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
    app.get('/api/u/:id',async (req, res) => {
      const id = req.params.id;
      return User.findAll({
        where: { user,_id: id }
      }).then(user => {
        res.json(user);
      }).catch(function (err) {
        console.log("delete failed with error: " + err);
        return 0;
        // handle error;
      })
    })
    ,

    app.post("/api/user/login", async (req, res, next) => {
      let getUser;

       await  User.findAll({
        where: { username: req.body.username }
      }).then( async user => {
        if (!user) {
          return res.status(401).json({
            message: "Authentication failed"
          });
        }
        getUser = await user;
              console.log(req.body.user_password);
              console.log(`useruser`,getUser[0].dataValues.user_password);
       return  bcrypt.compare(req.body.user_password, getUser[0].dataValues.user_password);
      }).then(response => {
        console.log(`tapindaa`)
        if (!response) {
          return res.status(401).json({
            message: "Authentication failed"
          });
        }
        console.log(`>>>>>>`,response)
        let jwtToken = jwt.sign({
          username: getUser.username,
          userId: getUser.user_id
        }, process.env.SECRET_TOKEN_KEY, {
          expiresIn: "1h"
        });
        console.log(`jwt---->token`,jwtToken)
        res.status(200).json({
          token: jwtToken,
          expiresIn: 3600,
          msg: getUser
        });
      }).catch(err => {
        return res.status(401).json({
          message: "Authentications failed"
        });
      });
    });



}



