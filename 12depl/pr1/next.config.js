const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// module.exports = {
//   reactStrictMode: true,
//   env: {
//     mongodb_username: "Artem2",
//     mongodb_password: "Artem2",
//     mongodb_clastername: "cluster0",
//     mongodb_database: "my-site",
//     BASE_URL:
//       "mongodb+srv://Artem2:Artem2@cluster0.fikvk.mongodb.net/my-site?retryWrites=true&w=majority",
//   },
// };

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "Artem2",
        mongodb_password: "Artem2",
        mongodb_clastername: "cluster0",
        mongodb_database: "my-site",
        BASE_URL:
          "mongodb+srv://Artem2:Artem2@cluster0.fikvk.mongodb.net/my-site?retryWrites=true&w=majority",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "Artem2",
      mongodb_password: "Artem2",
      mongodb_clastername: "cluster0",
      mongodb_database: "my-site",
      BASE_URL:
        "mongodb+srv://Artem2:Artem2@cluster0.fikvk.mongodb.net/my-site?retryWrites=true&w=majority",
    },
  };
};
