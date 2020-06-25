const starwarsClient = require('../services/starwarsClient')

class UserController {
    async getUsers(req, res) {
        const {id} = req.params;
        const { name } = req.query;
        console.log(name);
        console.log(id); 
        const response  = await starwarsClient.get('/people/1');

        const person = {
            name: response.data.name,
            height: response.data.height
        }
        return res.json(person);
    }

    saveUser(req, res) {
        console.log(req.body);
        return res
            .status(201)
            .json(`O usuário ${req.body.name} foi criado.`);
    }

}

module.exports = new UserController();