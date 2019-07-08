

let express = require('express');
let router = express.Router();
let userController = require('../controller/userController')

router.route('/')
    .get(userController.getUserList)
    .post(userController.saveUser);


router.route('/:id')
    .get(userController.getSingleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;