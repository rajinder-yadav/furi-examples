/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */

import { Furi, ApplicationContext, LOG_INFO } from '@furi-server/furi';

const app = new Furi();

app.get('/', (ctx: ApplicationContext) => {
  return { message: 'Hello From Furi' };
});

/**
 * Register a custom cleanup function.
 */
app.preShutdown(() => {
  LOG_INFO("==> Custom cleanup completed. <==");
});

/**
 * Call this to start a graceful shutdown process based on an event or condition.
 * Check the log file 'furi.log'.
 */
setTimeout(() => {
  LOG_INFO('Shutdown called');
  const cleanupTimer = 1000;
  Furi.shutDown(cleanupTimer);
}, 1000);

app.start();
