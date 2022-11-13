const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/allLoans', viewsController.getLoans);
router.get('/newLoan', viewsController.createnewLoan);
router.get('/login', viewsController.getLoginForm);
router.get('/signUp', viewsController.getSignInForm);
router.get('/loginUser', viewsController.getLoginUser);


module.exports = router;
