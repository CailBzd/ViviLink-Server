// src/framework_drivers/web/swagger.ts
import swaggerJsDoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';


const host = process.env.IP || '192.168.192.1';
const port = process.env.PORT || 3000;

const swaggerOptions: Options = {

  
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'ViviLink API',
      version: '1.0.0',
      description: 'API Documentation for ViviLink',
    },
    servers: [
      {
        url: `http://${host}:${port}`,
        description: `Development server`,
      },
    ],
  },
  apis: ['./src/interfaces/controllers/*.ts'], // Path to the API docs in controllers
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export function setupSwagger(app: Express): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
