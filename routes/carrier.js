const express = require("express");
const router = express.Router();
const controller = require("../controllers/carrier");
const passport = require('passport')


router.get('/:userId', passport.authenticate('jwt', {session:false}) , controller.getByUserId);
router.get('/:operatorId', passport.authenticate('jwt', {session:false}) , controller.getByOperatorId);

router.post('/', passport.authenticate('jwt', {session:false}) , controller.createNewCarrier);
router.delete('/:id', passport.authenticate('jwt', {session:false}) , controller.deleteCarrier);
router.get('/getById/:id', passport.authenticate('jwt', {session:false}) , controller.getById);
router.patch('/:id', passport.authenticate('jwt', {session:false}) ,controller.updateCarrier);
router.post('/:id/recalc', passport.authenticate('jwt', {session:false}) ,controller.recalcCarrier);
router.get('/getAll', passport.authenticate('jwt', {session:false}), controller.getAllCarriers);



module.exports = router;