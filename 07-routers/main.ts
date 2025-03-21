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

// Create a router instance.
const routerHello = Furi.router();

/**
 * Top-level Middleware that executes before any other middleware or route handlers.
 */
routerHello.use((ctx: ApplicationContext, next: NextHandler) => {
  ctx.send('Top-level Middleware executed\n');
  next();
})

/**
 * Route '/hello' based middlewares.
 */
routerHello.get('/hello', (ctx: ApplicationContext, next: NextHandler) => {
  ctx.send("Pre middleware executed\n");
  next();
});

routerHello.get('/hello', (ctx: ApplicationContext, next: NextHandler) => {
  // call the next middleware function
  next();
  // Send response after all middleware functions have been called.
  // We end the respones here.
  ctx.end("Hello world\n");
});

routerHello.get('/hello', (ctx: ApplicationContext, next: NextHandler) => {
  ctx.send("Post middleware executed\n");
  next();
});

// Create a new router to mount routes on.
const routerBye = Furi.router();

routerBye.get('/bye', (ctx: ApplicationContext) => {
  ctx.end("Bye bye, see you soon!\n");
});

// Mount routerHello as a middleware.
app.use(routerHello);

// Mount routerBye on a route prefix '/v1/api'.
app.use('/v1/api', routerBye);

app.start();
