# generator-npm-pasta

Generate copypasta for npm modules

```
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
- [tape](https://github.com/substack/tape)

Powered by [yeoman](http://yeoman.io/).
