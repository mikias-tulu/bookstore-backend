const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

import './libs/module-alias';
import 'dotenv/config';


import { app } from '@libs/app';


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BookStore',
      version: '1.0.0',
      description: 'Book Store API Documentation',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: ['./routes/*.js', './routes/*.ts'], 
};



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () =>
  console.log(`App running in ${NODE_ENV} mode on port: ${PORT}`),
);
