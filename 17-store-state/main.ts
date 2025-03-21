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

app.get('/set-state', (ctx: ApplicationContext) => {
  ctx.storeState("role", "developer");
  return { message: 'Application state set for role=developer' };
});

// Update application state, if state does not exists, create it.
app.get('/update-state', (ctx: ApplicationContext) => {
  ctx.storeState("role", "manager");
  return { message: 'Application state set for role=manage' };
});

app.get('/get-state', (ctx: ApplicationContext) => {
  const role = ctx.storeState("role");

  if(role) {
    return  { message: `Application state read for role=${role}` };
  } else {
    return { message: `Application state role=${role} does not exist.` };
  }
});

app.get('/delete-state', (ctx: ApplicationContext) => {
  ctx.storeStateDelete("role");
  return { message: `Application state deleted for entry role` };
});

app.get('/reset-state', (ctx: ApplicationContext) => {
  ctx.storeStateReset();
  return { message: `Application state has been reset.` };
});

app.start();
