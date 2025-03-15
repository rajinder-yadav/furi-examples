/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */


/**********************************************************
 * Test: curl -v -X OPTIONS http://localhost:3030         *
 **********************************************************
 *                                                        *
 * Optional CORS object properties with allowed types.    *
 *                                                        *
 * origin?: string | string[];                            *
 * methods?: string[];                                    *
 * headers?: string[];                                    *
 * credentials?: boolean;                                 *
 * maxAge?: number;                                       *
 **********************************************************/
import { Furi, ApplicationContext } from '@furi-server/furi';

const app = new Furi();

// The most basic way to enable CORS.
// This will enable for all '*' origins.
//
// app.use(Furi.Cors());

// Passing an options object to enable CORS.
// NOTE: A single origin can be specified as a string.
//
// app.use(Furi.Cors(
//   {
//     origin: '*',
//     methods: ['GET','OPTIONS','HEAD','PUT','PATCH','POST','DELETE'],
//     headers: ['Content-Type', 'Authorization'],
//     credentials: true,
//     maxAge: 86400, // 24 hours in seconds
//   }
// ));

// Passing an options object to enable CORS.
// NOTE: Multiple origins must be specified as an array.
// You do not need to specift all the option properties. Only the ones you need.
//
app.use(Furi.Cors(
  {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'OPTIONS', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    headers: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400, // 24 hours in seconds
  }
));

app.post('/', (ctx: ApplicationContext) => {
  return ctx.request.body;
});
app.start();
