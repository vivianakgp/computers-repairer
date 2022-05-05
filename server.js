//utils
const { db } = require('./utils/database');
//import app server express
const { app } = require('./app');
//import modules/tables
const { Repair } = require('./models/repairModel');
const { User } = require('./models/userModel');

// authentication
db.authenticate()
  .then(() => {
    console.log('sequelize authentication successful');
  })
  .catch(err => console.log(`sequelize Authentication error: ${err}`));
// relate tables
User.hasMany(Repair);
Repair.belongsTo(User);

// to apply the changes in our models/ tables use: { force:true }
db.sync()
  .then(() => {
    console.log('creating tables that did not exist');
  })
  .catch(err => console.log(`Syncronia error: ${err}`));
//process.env.PORT
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`express server is running on port ${PORT}`);
});
