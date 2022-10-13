const Users = require('./auth.controller');
module.exports = (router) => {
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
  router.put('/update/:id',Users.updateUser);
  router.delete('/delete/:id', Users.deleteUser);
  router.get('/obtener/:id',Users.obtenerUser);
  router.post('/olvidastecontrasena', Users.olvidasteContraseña);
  router.put('/crearcontrasena/:token', Users.createcontraseña);
  router.post('/registerpersonal', Users.createUserGuardias);

}