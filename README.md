# generator-npm-pasta

Generate copypasta for npm modules

```
% npm install -g generator-npm-pasta
% yo npm-pasta
```

![screenshot](https://raw.githubusercontent.com/rodowi/generator-npm-pasta/master/screenshot.png)

Generates the following file structure:

```
project/
  - .gitignore
  - .npmignore
  - LICENSE
  - README.md
  - lib/
    - cli.js
    - index.js
    - utils.js
  - package.json
  - test/
    - utils.test.js
```

Dependencies:
- [minimist](https://github.com/substack/minimist)
- [mocha](https://github.com/mochajs/mocha)

Powered by [yeoman](http://yeoman.io/).
