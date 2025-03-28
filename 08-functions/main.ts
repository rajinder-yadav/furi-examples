/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */

import { Furi, ApplicationContext, NextHandler, ContextHandler } from '@furi-server/furi';

function helloWorld(ctx: ApplicationContext): any {
  return { message: 'Hello From Furi' };
}

function one(ctx: ApplicationContext, next: NextHandler) {
  ctx.send("One\n");
  next();
}
function two(ctx: ApplicationContext, next: NextHandler) {
  // call the next Middlewaree function
  next();
  // Send response after all Middlewaree functions have been called.
  // End the respones here.
  ctx.end("Two\n");
}

// This top-level middleware never gets called.
function three(ctx: ApplicationContext, next: NextHandler) {
  ctx.send("Three\n");
  next();
}

const app = new Furi();

// Pass handler function directly to the route.
app.get('/', helloWorld);

// Pass handler functions directly to the route.
app.get('/calls', one, two, three);

// Handler functions array.
const steps: ContextHandler[] = [one, two, three];

// Pass handler functions array to the route using the spread operator.
app.get('/steps', ...steps);

app.start();
