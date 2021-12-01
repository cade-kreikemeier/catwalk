# Catwalk

This project is a redesigning of a mock e-commerce single page app for the Hack Reactor software engineering immersive program.

This repo contains the code for a client facing app, part of its accompanying API can be found in **[this repo](https://github.com/cade-kreikemeier/sdc_products_api)**.

## Technologies Used

This application was built using:

- **ReactJS**
    - Frontend javascript framework used to build the user interface.
- **React Router**
    - Complementary library to ReactJS responsible for conditionally rendering the app's views based on the current URL.
- **Axios**
    - a simple to use library providing a promise based HTTP client.
- **Babel**
    - Transpilation package used to convert ReactJS-specific syntax into browser-consumable JavaScript.
- **Webpack**
    - Bundling package used to bundle javascript modules and component-focused stylesheets into ```.js``` and ```.css``` bundles for browser comsumption.
- **Jest + React-Testing-Library**
    - Testing framework and library used for unit tests, integration tests, and end-to-end tests.

---

## Installation

Steps for getting started as a developer on this repo:

1. Clone this repo onto your local machine:
    - ```git clone https://github.com/cade-kreikemeier/catwalk.git```
2. ```cd``` into the repo's root directory
3. Install the project's depencies:
    - ```npm install```
4. Start tinkering!

---

## Provided Scripts

- ```npm run build-dev```
    - bundles the contents of the ```src/``` directory (also transpiling JavaScript as needed for browser consumption) into bundled ```.js``` and ```.css``` files which are linked into the ```index.html``` page, then __watches for changes and re-bundles on each file change.__
    - builds the app to **make API requests to localhost:3000**
- ```npm run build```
    - builds the app for production - __does not watch for files changes__.
- ```npm run server```
    - starts a development server which serves the client app from localhost - by default on ```localhost:3000``` - then __watches for changes and restarts the server with updated content on each file change__.
- ```npm run test```
    - runs the app's full test suite via **Jest**, automatically running all files with a `.test.jsx` or `.test.js` file extension.
    - _**NOTE:**_ This repo's GitHub origin will not merge any updates that cause the included tests to fail.
- ```npm run lint```
    - runs **eslint** on the full repo to check for syntax errors of code-style violations. This repo ueses the **AirBnB Style Guide**
    - _**NOTE:**_ This repo's GitHub origin will not merge any updates that do not the linter.
- ```npm run lint:fix```
    - runs **eslint** like the script above, however eslint will attempt to automatically fix any errors it encounters.
    - _**NOTE:**_ This repo's GitHub origin will not merge any updates that do not the linter.
- ```npm run live```
    - opens the index.html file contained within ```./client/dist``` using your system's default browser.
---
