/*!
        File Description: Handles routes for user entity.
*/

'use strict';

import {
  Request,
  IReply
} from 'hapi';


const handler = {
  test ( request:Request, reply:IReply ) {
    reply('pong');
  },
};

export default handler;
