require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc');
const YAML = require('yamljs');
const swaggerDocumentation = YAML.load('./swagger.yaml');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.ADRIAN_PORT;

require('./route/index')(app)





const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Imprint Africa Open API', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: ['./resources/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

 
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
 app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));



db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// define a simple route
app.get('/', (req, res) => {
  res.json({ "message": "Welcome." });
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
