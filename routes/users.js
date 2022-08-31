const { json } = require('express');
const express =  require('express');
const router = express.Router();
const User = require('../models/userModel')

//Get method to return all the users
router.get('/', async(req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    }catch(err) {
        console.log(err);
        res.send({error: err});
    }
});

//Post method to add user
router.post('/', async(req, res) => {

    const user = new User({
        name: req.body.name,
        occupation: req.body.occupation,
        subscription: req.body.subscription
    });
    
    try{
        const result = await user.save();
        res.json(result);

    } catch(err){
        res.send({error: err});
    }
});

//Get method to retrieve user
router.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch(err){
        res.status(404).send({error: err});
    }
});

//Put method to update the user
router.put('/:id', async(req, res) => {

    try{
        const user = await User.findById(req.params.id);

        if(req.body.name !== undefined) {
            user.name = req.body.name;
        }

        if(req.body.occupation !== undefined) {
            user.occupation = req.body.occupation;
        }

        if(req.body.subscription !== undefined) {
            user.subscription = req.body.subscription;
        }
      
        const result = await user.save();
        res.json(result);
    } catch(err) {
        res.status(404).send({error: err});
    }
});

//Delete method to delete the user
router.delete('/:id', async(req, res) => {

    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch(err) {
        res.status(404).send({error: err});
    }
});

module.exports = router;