module.exports = {
  apps: [
    {
      name: "app",
      script: "./app.js",
      env: {
        NODE_ENV: "production",
        CLIENT_FRONTEND_URL: "https://nuvc.org",
        SERVER_URL: "https://api.nuvc.org",
      },
    },
  ],
};
