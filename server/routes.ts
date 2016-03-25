import {
  Server
} from 'hapi';


const attachRoutes = ( server:Server ) => {
  server.route( require('../src/routes').default );
};

export default attachRoutes;
