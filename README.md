# Troop 53 Public Web Site
This is New Berlin Troop 53's Public Web Site.  It uses GatsbyJS for 
the build system and TailwindCSS for styling.  

# How to setup to build
Install Gatsby CLI:
```sh
npm i --global gatsby-cli
```

# How to build
Clone the repository locally and install node.js

Then run:

```npm install
npm run build
```

Output should be in a directory called `public`.

# How to test locally
To test the site locally run:
```npm run develop
```

Enter this URL in browser:
http://localhost:8000

## Format and lint
* `npm run analyze` - See what ESLint and Prettier can fix
* `npm run fix` - Run Prettier and ESLint with the `--fix` option

## Build your site
Use `npm run build` to build your site for production.


## Resources
* [Gatsby documentation](https://www.gatsbyjs.org/docs/)
* [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)
* [Prettier documentation](https://prettier.io/docs/en/index.html)
* [ESLint documentation](https://eslint.org/docs/user-guide/configuring)