/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */


/****************************************************************************************************************
 * Test json                                                                                                    *
 * curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello from Furi!"}' http://localhost:3030/ *
 ****************************************************************************************************************
 * Test text                                                                                                    *
 * curl -X POST -H "Content-Type: text/plain" -d '"Hello from Furi!"' http://localhost:3030/                    *
 **************************************************************************************************************************************************
 * Test Form-urlencoded                                                                                                                           *
 * curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'message=Hello from Furi!&department=Engineering' http://localhost:3030/  *
 **************************************************************************************************************************************************/
import { Furi, ApplicationContext } from '@furi-server/furi';

const app = new Furi();

app.use(Furi.BodyParser())

app.post('/', (ctx: ApplicationContext) => {
  return ctx.request.body;
});
app.start();
