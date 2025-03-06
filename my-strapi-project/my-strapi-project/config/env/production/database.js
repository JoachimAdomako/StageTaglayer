const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  const databaseUrl = env("DATABASE_URL");

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set in environment variables.");
  }

  const config = parse(databaseUrl);

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: env.bool("DATABASE_SSL", true) ? { rejectUnauthorized: false } : false,
      },
      debug: false,
    },
  };
};
