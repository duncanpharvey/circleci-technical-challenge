const Reporter = require('jasmine-console-reporter');
jasmine.getEnv().addReporter(new Reporter());

const functions = require('../js/module.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Click Tests", () => {
  beforeEach(async function() {
    await JSDOM.fromFile("./index.html").then(dom => {
      document = dom.window.document;
    });
  });

  it("should hide text on page load", () => {
    expect(document.getElementById("hidden-text").style.display).toEqual("none");
  })

  it("should toggle text display status when clicked once", () => {
    var button = document.getElementById("the-button");
    var text = document.getElementById("hidden-text");
    functions.listenForButtonClick();
    var before = text.style.display;
    button.click();
    var after = text.style.display;
    expect(before).not.toEqual(after);
  })

  it("should have original text display status when clicked twice", () => {
    var button = document.getElementById("the-button");
    var text = document.getElementById("hidden-text");
    functions.listenForButtonClick();
    var before = text.style.display;
    button.click();
    button.click();
    var after = text.style.display;
    expect(before).toEqual(after);
  })
});