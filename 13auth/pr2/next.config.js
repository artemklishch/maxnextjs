module.exports = () => {
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "Artem2",
      mongodb_password: "Artem2",
      mongodb_clastername: "cluster0",
      mongodb_database: "auth-demo",
      BASE_URL:
        "mongodb+srv://Artem2:Artem2@cluster0.fikvk.mongodb.net/auth-demo?retryWrites=true&w=majority",
    },
  };
};
