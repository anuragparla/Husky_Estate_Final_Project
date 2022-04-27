var app = require('./app');
var port = process.env.PORT || 4000;

// const bcrypt = require('bcryptjs');
// const {USER_TYPES} = require('./util/constants');

// const User = require('./models/User');
// var hashedPassword = bcrypt.hashSync("Admin1234", 8);

// User.create({
//   name : "Admin",
//   email : "admin@huskyestate.com",
//   password : hashedPassword,
//   userType: USER_TYPES.ADMIN
// });


var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

