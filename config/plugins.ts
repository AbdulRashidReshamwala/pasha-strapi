module.exports = ({ env }) => ({
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::product.product",
          modelName: "product",
          transliterate: true,
          queryConstraints: {
            where: {
              $and: [
                {
                  publishedAt: { $notNull: true },
                },
              ],
            },
          },
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: "title",
                weight: 100,
              },
              {
                name: "description",
                weight: -100,
              },
            ],
          },
        },
      ],
    },
  },
});
