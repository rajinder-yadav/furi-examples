/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */

import { Furi, ApplicationContext, BaseRouterHandler, ClassHandler } from '@furi-server/furi';

/**
 * Class based handler for a route.
 */
class HelloFuri extends BaseRouterHandler {
  handle(ctx: ApplicationContext): any {
    return { message: 'Hello From Furi' };
  }
}
const app = Furi.create();

// Mount handler Class to route using function ClassHandler()
app.get('/hello', ClassHandler(HelloFuri));
app.start();
