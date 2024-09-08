const {Router} = require('express');

const routes = new Router();

routes.get('/health', (req, res) => {
    res.send({message: 'Connected with success!'});
});

routes.get('/postar/:userX', (req, res) => {
    const { userX } = req.params;
    res.status(200).json({message : `rota funcionando perfeitamente ${userX}`})
});

module.exports=routes;