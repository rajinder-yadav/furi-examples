/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */

import { Furi, ApplicationContext } from '@furi-server/furi';

const app = new Furi();
app.get('/', (ctx: ApplicationContext) => {
  return { message: 'Hello From Furi' };
});
app.start();
