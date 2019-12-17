const router = require('express').Router();
let Servant = require('../models/servant.model');

router.route('/').get((req,res) => {
    Servant.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const servantName = req.body.servantName;
    const servantClass = req.body.servantClass

    const newServant = new Servant({
        servantName,
        servantClass
    });

    newServant.save()
    .then(() => res.json('Servant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;