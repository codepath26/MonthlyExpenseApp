  const  express = require('express')
  const sequelize = require('./utils/database')
  const cors = require('cors')
  const bodyParser = require('body-parser');
  const userRoutes = require('./routes/user')
  const app = express()
  const port = 8000
  app.use(cors());
  app.use(bodyParser.json());
  app.use(userRoutes);
  // sequelize.sync({ alter: true}) // this is the method to change the datatype of the any colum just uppdtated the column and put {} att heare once and run once and see magic
  sequelize.sync() 
    .then(() => {
      app.listen(port);
    })
    .catch(error => {
      console.error('Error synchronizing models:', error);
    });
