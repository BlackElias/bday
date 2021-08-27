const Message = require('../../../models/message');

const getAll = (req, res) => {
    Message.find({
        "user": req.user._id
    }, (err, docs) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": docs
                }
            });
        }
    });
}

const create = (req, res, next) => {

    let message = new Message();
    message.text = req.body.text;
    console.log(req.user);
    message.user = req.user._id;
    message.completed = false;
    message.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not save this message"
            });
        }

        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            });
        }
    })


}

const update = (req, res) => {
    let user = req.user._id;
    let messageId = req.params.id;
    Message.findOneAndUpdate({
        user: user,
        _id: messageId
    }, {
        completed: true
    }, {
        new: true
    }).then(doc => {
        res.json({
            "status": "success",
            "data": {
                message: doc
            }
        })
    }).catch(err => {
        res.json(err);
    })
}

const remove = (req, res) => {
    let user = req.user._id;
    let messageId = req.params.id;
    Message.findOneAndDelete({
        user: user,
        _id: messageId
    }).then(result => {
        res.json({
            "status": "success",
            "message": "It's gone!"
        })
    }).catch(err => {
        res.json(err);
    })
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;