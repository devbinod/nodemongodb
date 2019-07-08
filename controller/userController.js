exports.getUserList = (req,resp) => {
    resp.status(200)
        .json({
            userlist: 'all user list'
        });
}


exports.saveUser = (req,resp) => {
    resp.status(200)
        .json({
            userlist: 'save user'
        });
}

exports.getSingleUser = (req,resp) => {
    resp.status(200)
        .json({
            user: `user with id ${req.params.id}`
        });
}

exports.updateUser =  (req,resp) => {
    resp.status(200)
        .json({
            user: `update user with id ${req.params.id}`
        });
}

exports.deleteUser =  (req,resp) => {
    resp.status(200)
        .json({
            user: `delete user with id ${req.params.id}`
        });
}
