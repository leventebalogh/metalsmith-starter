# MetalSmith Starter

![Screenshot](./screenshot.png)

## Table of Contents
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Development](#development)
- [Directory Structure](#directory-structure)

## Dependencies
To build and develop the project you will need the following dependencies:
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/lang/en/)

## Setup
```bash
# Install dependencies
$ yarn

# Build site
$ yarn build
```

## Development
```bash
# Build project
$ yarn build

# Serve built project
$ yarn serve

# Watch files for changes (and re-build on any change)
$ yarn dev

# Clean build directory
$ yarn run clean
```

## Directory Structure
```bash
+- build/ # the static build output
+- src/
    +- content/ # all the static content written in Markdown
    +- layouts/ # layout components in Handlebars templates
    +- styles/ # styling in SASS files
+- config.js # going to hold project specific configuration
```