module.exports = {
    content: ['./app/**/*.html', './app/**/*.ts', './app/**/*.hbs'],
    css: ['./app/main.css'],
    whitelist: ['link-btn-red'],
    extractors: [
      {
        extractor: class {
          static extract(content) {
            return content.match(/[A-Za-z0-9-_:/]+/g) || []
          }
        },
        extensions: ['html', 'ts', 'hbs']
      },
          
    ]
  }