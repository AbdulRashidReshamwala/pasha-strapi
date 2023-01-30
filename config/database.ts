export default ({ env }) => {
  const databaseUrl = new URL(env("DATABASE_URL", ""));
  return {
    connection: {
      client: "postgres",
      connection: {
        host: databaseUrl.hostname,
        port: databaseUrl.port,
        database: "pasha_strapi",
        user: databaseUrl.username ?? "",
        password: databaseUrl.password ?? "",
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  };
};
