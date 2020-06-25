class UserController {

    getUsers(req, res) {
        const user = {
            name: "Murilo",
            age: 13
        }
        return res.json(user)
    }

    saveUser(req, res) {
        console.log(req.body);
        return res
            .status(201)
            .json(`O usuário ${req.body.name} foi criado.`);
    }

}

module.exports = new UserController();