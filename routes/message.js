const express = require("express");
const router = express.Router();
const controller = require("../controllers/message");
const passport = require('passport');

router.post('/', passport.authenticate('jwt', {session:false}) , controller.createNewMessage);
router.delete('/:id', passport.authenticate('jwt', {session:false}) , controller.deleteMessage);
router.get('/getById/:id', passport.authenticate('jwt', {session:false}) , controller.getById);
router.get('/getBySenderName', passport.authenticate('jwt', {session:false}) , controller.getBySenderName);
router.get('/getByRecieverName', passport.authenticate('jwt', {session:false}) , controller.getByRecieverName);

module.exports = router;