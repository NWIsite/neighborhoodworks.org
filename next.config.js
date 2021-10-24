const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'NWItempsite',
        mongodb_password: '4YRSDFGSRve0vqp',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-temp-site',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'NWItempsite',
      mongodb_password: 'FGg56Frgrs44vrp',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
