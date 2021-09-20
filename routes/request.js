const express = require("express");
const router = express.Router();
const controller = require("../controllers/request");
const passport = require('passport');

router.post('/', passport.authenticate('jwt', {session:false}) , controller.createRequest);
router.post('/:id', passport.authenticate('jwt', {session:false}) , controller.acceptRequest);
router.delete('/:id', passport.authenticate('jwt', {session:false}) , controller.deleteRequest);
router.get('/getById/:id', passport.authenticate('jwt', {session:false}) , controller.getById);
router.get('/getByUserId/:id', passport.authenticate('jwt', {session:false}) , controller.getByUserId);
router.get('/getByOperatorId/:id', passport.authenticate('jwt', {session:false}) , controller.getByOperatorId);

module.exports = router;