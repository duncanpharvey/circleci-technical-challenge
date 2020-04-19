# circleci-technical-challenge

## App Url
http://circleci-tech-challenge-dh.herokuapp.com/

## Description

This is a basic web app to demonstrate understanding of CircleCI's countinuous integration, deployment, and testing platform.

## Details

This app uses an express server in Node.js to serve the static html, css, and image files. The only functionality of the app is to toggle the display status of initially hidden text on the click of a button.

## Tests

The tests to verify app functionality are written using the [Jasmine](https://jasmine.github.io/) testing framework. Two different methods are used to test the click button and display text functionality.

* [jsdom](https://github.com/jsdom/jsdom) - Load index.html DOM using the jsdom module
* [puppeteer](https://github.com/puppeteer/puppeteer) - Run app and use the puppeteer module to interact with it in a headless browser

## Build and Deployment

When code is pushed to the repository, CircleCI runs the tests and deploys the app to Heroku if all of the tests pass.
