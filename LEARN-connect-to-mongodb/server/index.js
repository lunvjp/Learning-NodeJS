const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/signatures')
.then(() => {
  console.log('Success to connect database')
})
.catch(err => console.log(err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected!")
});
