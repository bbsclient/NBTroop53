exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-dom/server': stage.includes('html')
          ? 'react-dom/server.node'
          : 'react-dom/server.browser',
      },
    },
  });
};
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    GalleryYamlImages: {
      imageFile: {
        type: 'File',
        async resolve(source, args, context) {
          const { entries } = await context.nodeModel.findAll({
            type: 'File',
            query: {
              filter: { relativePath: { eq: source.image } },
            },
          });
          return Array.from(entries)[0] || null;
        },
      },
    },
  });
};
