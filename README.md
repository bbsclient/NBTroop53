# Troop 53 Public Web Site
This is New Berlin Troop 53's Public Web Site.  It uses brunch.io for 
the build system.  The static site uses several brunch.io plugins including
html-brunch-static for templating using handlebars.js.

# How to build
Clone the repository locally and install node.js

Then run:

npm install
brunch build -p

or: npm run build

Output should be in a directory called `public`.

# How to test locally
To test the site locally run:
brunch watch --server

or: npm run server

Enter this URL in browser:
http://localhost:3333

# Debugging vs minification
Brunch only enables optimziation plugins with the -p parameter.  
The debug build doesn't enable this but the build does

