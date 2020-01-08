
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    const config = getConfig()
    if (stage.startsWith('develop') && config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom': '@hot-loader/react-dom'
      }
    }
  }
  exports.createResolvers = ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  }) => {
    const { createNode } = actions
    createResolvers({
      GallaryYamlImages: {
        imageFile: {
          type: `File`,
          resolve(source, args, context, info) {
            return context.nodeModel.getAllNodes({ type: "File" })
            .find(file => file.relativePath === source.image)
        },            
       },
      },
    })
  }