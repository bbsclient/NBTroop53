
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
exports.createResolvers = ({
  createResolvers,
}) => {
  createResolvers({
    GalleryYamlImages: {
      imageFile: {
        type: 'File',
        resolve(source, args, context) {
          return context.nodeModel.getAllNodes({ type: 'File' })
            .find(file => file.relativePath === source.image);
        },
      },
    },
  });
};
