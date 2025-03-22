/**
 * Furi - Fast Uniform Resource Identifier.
 *
 * The Fast and Furious Node.js Router.
 * Copyright(c) 2016, 2025 Rajinder Yadav.
 *
 * Labs DevMentor.org Corp. <info@devmentor.org>
 * This code is released as-is without warranty under the "GNU GENERAL PUBLIC LICENSE".
 */


/**
 * Furi running as a HTTPS server.
 *
 * The certificates can be found use the "ssl" directory.
 *
 * See furi.yaml, you will declare the SSL private key and certificate files there.
 *
 * 1. Folder "ssl" contains a self-signed certificate.
 * 2. Folder "ssl/signed" contain a self-signed certificate with a passphrase.
 *
 * For testing with a self-signed certificate, you can uncomment the following lines:
 *
 * cert:
 *   key: ./ssl/key.pem
 *   cert: ./ssl/cert.pem
 *
 * For testing with a self-signed certificate with a passphrase, you can uncomment the following lines:
 *
 * cert:
 *   key:  ./ssl/passphrase/key.pem
 *   cert: ./ssl/passphrase/cert.pem
 *   passphrase: hello123
 *
 * @see https://github.com/DevMentorOrg/Furi
 */
import { Furi } from '@furi-server/furi';

const app = new Furi();

app.get('/', (ctx) => {
  return "Welcome to Furi Server!";
});

app.start();
