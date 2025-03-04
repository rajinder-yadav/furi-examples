import { Furi, ApplicationContext, LOG_INFO  } from '@furi-server/furi';

const app = new Furi();

app.get('/', (ctx: ApplicationContext) => {
  return { message: 'Hello From Furi' };
});

/**
 * Register a cstom cleanup function.
 */
app.preShutdown(() => {
    LOG_INFO("==> Custom cleanup completed. <==");
});

/**
 * Call this to start a shutdown process based on an event or condition.
 * Check the log file 'furi.log'.
 */
setTimeout(() => {
  LOG_INFO('Shutdown called');
  const cleanupTimer = 1000;
  Furi.shutDown(cleanupTimer);
}, 1000);

app.start();
