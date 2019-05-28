// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
      './app/**/*.html',
      './app/**/*.hbs',
      './app/**/*.ts',
      // etc.
    ],
    whitelist: ['link-btn-red'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    
  })
  
  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : []
    ]
  }