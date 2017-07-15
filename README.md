# MetalSmith Starter

[Check out the demo page.](https://metalsmith.leventebalogh.com)

![Screenshot](./screenshot.png)

## Table of Contents
- [Demo](https://metalsmith.leventebalogh.com)
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

# Serve built project (View on http://localhost:8080)
$ yarn serve

# Watch files for changes (and re-build on any change)
$ yarn dev

# Clean build directory
$ yarn run clean
```

## Directory Structure
```bash
+- ansible/ # ANSIBLE config files
+- build/ # The static build output
+- gulp/ # Gulp task files
+- src/
    +- content/ # All the static content written in Markdown
    +- layouts/ # Layout components in Handlebars templates
    +- styles/ # Styling in SASS files
+- config.js # Going to hold project specific configuration
+- deploy.sh # Executable script to easily deploy the project
```