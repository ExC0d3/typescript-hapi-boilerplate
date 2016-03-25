/**
 * File description: Main file, runs the app.
 */

'use strict';

import server from './server';

server.start()
  .then(() => console.log(`API server running at ${server.info.uri}`));
