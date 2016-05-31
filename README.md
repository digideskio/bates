
## Bates
> He knows how I like my front-end: automated.

The contemporary front-end stack and build pipeline is a very opinionated place, with lots of choices for a lot of different setups. **Bates is here to help automate a specific set of choices for React front-end projects.**

## Quick start

Bates needs node >= 5 and npm >= 3.3  
```bash
# check the versions
$ node -v && npm -v
# update if necessary
# use nvm to help you manage node versions https://github.com/creationix/nvm
$ nvm i 5
$ npm i npm -g
```

Create a new project
```sh
mkdir my-project
cd my-project
npm init
```

Install and run Bates
```sh
npm i bates --save-dev

npm run bates -- template
# create base files

npm run bates -- start
# start hot reload dev server at: http://localhost:3000
# run tests and lint on change
# hit ctrl+c to close the server
```

Edit the `src/main.js`.  
When you want to deploy the site run:

```sh
npm run bates -- deploy
# follow the prompt, choose your domain
# the site will be available at http://yourDomain.surge.sh
```

## Info

Bates work better together with the following code style and architecture: [code style](docs/style.md). The main part of it are the commit messages format, the folder structure and the inlined styles.

There're three main entry points on the code that Bates helps to handle:  
- A *site* entry point (src/main.js),
- A *npm package* entry point (src/index.js), and
- A *html script distribution* entry point (src/dist.js)

For information on Travis continuous deploy/release see: [travis setup](docs/travis.md)

## API

**Development**

`npm run bates -- template`  
If missing, add some base files to your project.

`npm run bates -- start`  
Prune and update your dependencies.  
Start a hot-reloaded, babel transpiled, server at localhost:3000.  
Run tests and lint on change.  
Tell you about your outdated packages, your last release and what have changed until now.

`npm run bates -- server`  
Run just the server from the *start* command.  
The server defaults to port 3000, an PORT env var can also be passed. Eg: `PORT=8080 npm run bates -- server`

`npm run bates -- test`  
Test and lint your /src. Test files need to be named `*.test.js`

`npm run bates -- testWatch`  
Same as above, but every time the source change

`npm run bates -- cov`  
Run the test coverage and open a browser with the results.

`npm run bates -- getSchema`  
Save graphql schema.json instrospection on root, for relay apps.  
When a schema.json is found on the root, the transpile process automatically run the 'babel-relay-plugin'.  
Defaults the query to http://localhost:5000/graphql, a HOST env can also be passed, for eg `HOST="http://localhost:8000" npm run bates -- getSchema`

**Site deployment and package releases**

`npm run bates -- deploy`  
Generate a bundle file from /src/main.js on the /dist folder and deploy that folder to [surge.sh](https://surge.sh/).  
If you add a [CNAME](https://surge.sh/help/remembering-a-domain) file, you don't need to fill any prompts here.

`npm run bates -- bundle`  
Generate a bundle file from /src/main.js on the /dist folder, for when you want to deploy your code as a website.

`npm run bates -- bundleSize`  
Generate an analysis of the bundle size.

`npm run bates -- lib`  
Transpile the code from /src to /lib, for when you want to release the code as a npm package.

`npm run bates -- release`  
This command is aimed at automating releases on a CI server.  
Using your [git commit messages](docs/style.md#commit-messages), check for the changes since your last release and suggest a new version. If approved, bump the package and push a new tag.

`npm run bates -- dist`  
Generate a distribution file, for those who want to consume your npm package using html script tags directly.

`npm run bates -- githubRelease`  
This command should be used on TravisCI, after a release.
Create release notes since your last release, using your [git commit messages](docs/style.md#commit-messages). Do a release on your github project.  
Travis need to have a `GIT_TOKEN` environment variable set up with your project token.

`npm run bates -- clean`  
Delete all build and transpiled files.
