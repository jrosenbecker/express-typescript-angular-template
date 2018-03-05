# Express Typescript Template

This is a simple, lightweight template for setting up an Express server using typescript.

## Installation/Setup
1. Clone this repository.
```
git clone https://github.com/jrosenbecker/express-typescript-template
```
2. Run `npm install`.
3. Run `npm start` to start the express server or `npm run watch` to watch for any changes you make. The watch script will watch for changes within the `src` directory by default, though this can be modified in the `nodemonconfig.json` file.

## Comments
* This uses `ts-node` to run the typescript files without needing to worry about compiling every time you make changes
* The launch.json file defines a debugging configuration for Visual Studio Code which will allow you to debug while running `ts-node`