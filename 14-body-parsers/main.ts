/**
 * Test JSON
 * curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello from Furi!"}' http://localhost:3030/
 *
 * Test Text
 * curl -X POST -H "Content-Type: text/plain" -d '"Hello from Furi!"' http://localhost:3030/
 *
 * Test Form-urlencoded
 * curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'message=Hello from Furi!&department=Engineering' http://localhost:3030/
 *
 * @param {string} message - The message to be sent.
 * @returns {string} - The received message.
 */

import { Furi, ApplicationContext  } from '@furi-server/furi';

const app = new Furi();

app.use(Furi.BodyParser())

app.post('/', (ctx: ApplicationContext) => {
  return ctx.request.body;
});
app.start();
