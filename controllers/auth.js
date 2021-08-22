const User = require('../models/User');
const jwt = require('jsonwebtoken');


const signup = async (req, res, next) =>{
   let username = req.body.username; 
   let password = req.body.password;
    let birthday = req.body.birthday;

    const user = new User({username: username, birthday});
    await user.setPassword(password);
    
    await user.save().then(result =>{
        let token = jwt.sign({
            uid: result._id,
            username: result.username,
            
        }, "secretword");
        res.json({
            "status": "succes",
            "data":{
               "token": token,
               "birthday": birthday 
            }
        })
    }).catch(error =>{
        res.json({
            "status": "failed"
        })
    })
};
const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password, req.body.birthday).then(result => {
        res.json({
            "status": "success",
            "data": {
                "user": result
            }
        });
    }).catch(error =>{
        res.json({
            "status": "failed to login",
            "message": error
        })
    });
};
module.exports.signup = signup
module.exports.login = login