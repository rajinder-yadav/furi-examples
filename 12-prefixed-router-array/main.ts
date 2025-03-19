/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */

import {
  Furi,
  ApplicationContext,
  Routes,
  NextHandler
} from '@furi-server/furi';

function middlewareHandler (ctx: ApplicationContext, next: NextHandler) {
  ctx.send('Middleware Pre!\n');
  next();
}

function oneHandler(ctx: ApplicationContext) {
  ctx.end('One!\n');
}

const routes: Routes = {
  // Multiple routes on the same path and method
  // work like middleware.
  routes: [
    // We can combine multiple handlers into an array.
    {
      method: 'get',
      path: '/one',
      // Declare multiple handler using a "controller" array.
      controller: [middlewareHandler, oneHandler]
    },
  ]
};

const app = Furi.create();

// Mounter router array to a prefixed route.
app.use('/v1/api',routes);
app.start();
