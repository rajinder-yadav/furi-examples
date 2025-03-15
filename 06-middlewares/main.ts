/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */

import { Furi, ApplicationContext, Middleware } from '@furi-server/furi';

const app = new Furi();

/**
 * Top-level Middlewaree that executes before any other Middlewaree or route handlers.
 */
app.use( (ctx: ApplicationContext, next: Middleware) => {
  ctx.send('Top-level Middlewaree executed\n');
  next();
})

/**
 * Route '/hello' based Middlewarees.
 */
app.use('/hello', (ctx: ApplicationContext, next: Middleware) => {
  ctx.send("Pre Middlewaree executed\n");
  next();
});
app.get('/hello', (ctx: ApplicationContext, next: Middleware) => {
  // call the next Middlewaree function
  next();
  // Send response after all Middlewaree functions have been called.
  // We end the respones here.
  ctx.end("Hello world\n");
});
app.get('/hello', (ctx: ApplicationContext, next: Middleware) => {
  ctx.send("Post Middlewaree executed\n");
  next();
});

app.start();
