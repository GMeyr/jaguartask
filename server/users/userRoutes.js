var userController = require('./userController.js');

module.exports = function(app) {

  // console.log(app);
  app.post('/signup', userController.signup);
  app.post('/signin', userController.signin);
  // console.log(userController.signup);
  // app.post('/', function(req, res, next) {
  //   res.json({connected: true});
  // });

};
