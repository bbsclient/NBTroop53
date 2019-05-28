exports.config =
  files:
    stylesheets:
      joinTo: 'stylesheets/app.css'
    javascripts: 
      joinTo: 'app.js'
  modules:
    autoRequire:
      'app.js': ['app']
  plugins:
    postcss: {
      processors: [
        require('tailwindcss'),
        require('cssnano'),
        require('@fullhuman/postcss-purgecss'),
      ]
    }
    static:
      processors: [
        require('html-brunch-static') {
          handlebars:
            enableProcessor: true
          helpers: {
              ifEq:      (a,b,opts) -> if a is b then opts.fn(this) else opts.inverse(this)
              ifEqDebug: (a,b,opts) -> console.log "a: '" + a + "'"; console.log "b: '" + b + "'"; if a is b then opts.fn(this) else opts.inverse(this)
              log:       (msg...)   -> console.log msg
          }            
        }
      ]
