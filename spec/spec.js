const Reporter = require("jasmine-console-reporter");
jasmine.getEnv().addReporter(new Reporter()); // displays test summary nicely in console

const functions = require("../js/common.js");
const jsdom = require("jsdom");
const { JSDOM } = jsdom; // use DOM in node

describe("Click Tests", () => {
  beforeEach(async function() {
    await JSDOM.fromFile("./index.html", { runScripts: "dangerously", resources: "usable" }).then(dom => { // wait for dom to load from file before running tests
      window = dom.window;
    });
    await new Promise(resolve => window.addEventListener("load", resolve)); // wait for external scripts to finish before running tests
    document = window.document; // global document variable reset for each test run
  });

  // no clicks
  it("should hide text on page load", () => {
    expect(document.getElementById("hidden-text").style.display).toEqual("none");
  })

  // one click
  it("should toggle text display status when clicked once", () => {
    var button = document.getElementById("the-button");
    var text = document.getElementById("hidden-text");
    var before = text.style.display;
    button.click();
    var after = text.style.display;
    expect(before).not.toEqual(after);
  })

  // two clicks
  it("should have original text display status when clicked twice", () => {
    var button = document.getElementById("the-button");
    var text = document.getElementById("hidden-text");
    var before = text.style.display;
    button.click();
    button.click();
    var after = text.style.display;
    expect(before).toEqual(after);
  })
});