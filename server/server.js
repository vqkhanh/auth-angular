const { read } = require('fs');
const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('../server/data/users');

server.get('/api/users', (req, res, next) => {
  if ( req.method  == 'GET' ){
      if(req.get('Authorization') == 'Bearer ' + userData.getAuthen.token)
      {
        return res.status(200).send(userData.getUsers);
      }
  }
  return res.status(200).send();
});

server.post('/api/authenticate', (req, res, next) => {
  console.log("req",req.body);
  if(req.body.email == userData.getAuthen.email && req.body.password == userData.getAuthen.password){
    res.status(200).send({"token":userData.getAuthen.token});
  }
  else{ 
    res.status(200).send();
  }
});

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});

