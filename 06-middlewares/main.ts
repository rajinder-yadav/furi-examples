/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */

import { Furi, ApplicationContext, NextHandler } from '@furi-server/furi';

const app = new Furi();

/**
 * Top-level Middlewaree that executes before any other Middlewaree or route handlers.
 * This middleware will always get called before route based middleware and route handlers.
 */
app.use( (ctx: ApplicationContext, next: NextHandler) => {
  ctx.send('Top-level Middlewaree executed\n');
  next();
})

/**
 * Route '/hello' based Middlewarees.
 * This will be called before any other router handler for '/hello' route,
 * regardless of the HTTP method: GET, POST, PUT, PATCH, DELETE.
 */
app.use('/hello', (ctx: ApplicationContext, next: NextHandler) => {
  ctx.send("Pre Middlewaree executed\n");
  next();
});

/**
 * This is also a middleware but only work for '/hello' route,
 * on the HTTP method GET.
 */
app.get('/hello', (ctx: ApplicationContext, next: NextHandler) => {
  // call the next Middlewaree function
  next();
  // Send response after all Middlewaree functions have been called.
  // We end the respones here.
  ctx.end("Hello world\n");
});

/**
 * This is the last middleware in the '/hello' route,
 * on the HTTP method GET. It MUST end the response by either
 * returning a value or calling end();
 * Also note, no next function parameter it declared since it will
 * never be used.
 */
app.get('/hello', (ctx: ApplicationContext) => {
  ctx.end("Post Middlewaree executed\n");
});

app.get('/bye', (ctx: ApplicationContext) => {
  ctx.end("See you again, thanks for coming!\n");
});

app.start();
