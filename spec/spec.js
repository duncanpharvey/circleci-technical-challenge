const Reporter = require("jasmine-console-reporter");
jasmine.getEnv().addReporter(new Reporter()); // display test summary nicely in console

const { JSDOM } = require("jsdom");
const puppeteer = require('puppeteer');
require('../app.js');
require('dotenv').config();

describe("Puppeteer Click Tests", () => {
  beforeEach(async function () {
    this.browser = await puppeteer.launch({ headless: true });
    this.page = await this.browser.newPage();
    await this.page.goto(`http://localhost:${process.env.PORT}/`);
    this.handle = await this.page.evaluateHandle(() => ({ document }));
    const properties = await this.handle.getProperties();
    this.documentHandle = properties.get('document');
  });

  afterEach(async function () {
    await this.handle.dispose();
    await this.browser.close();
  });

  // no clicks
  it("should hide text on page load", async function () {
    var displayStatus = await this.page.evaluate(document => {
      return document.getElementById("hidden-text").style.display;
    }, this.documentHandle);
    expect(displayStatus).toEqual("none");
  });

  // one click
  it("should toggle text display status when clicked once", async function () {
    var displayStatus = await this.page.evaluate(document => {
      var text = document.getElementById("hidden-text");
      var button = document.getElementById("the-button");
      var before = text.style.display;
      button.click();
      return { before: before, after: text.style.display };
    }, this.documentHandle);
    expect(displayStatus.before).not.toEqual(displayStatus.after);
  });

  // two clicks
  it("should have original text display status when clicked twice", async function () {
    var displayStatus = await this.page.evaluate(document => {
      var text = document.getElementById("hidden-text");
      var button = document.getElementById("the-button");
      var before = text.style.display;
      button.click();
      button.click();
      return { before: before, after: text.style.display };
    }, this.documentHandle);
    expect(displayStatus.before).toEqual(displayStatus.after);
  });

});


describe("JSDOM Click Tests", () => {
  beforeEach(async function () {
    await JSDOM.fromFile("./index.html", { runScripts: "dangerously", resources: "usable" }).then(dom => { // wait for dom to load from file before running tests
      this.window = dom.window;
    });
    await new Promise(resolve => this.window.addEventListener("load", resolve)); // wait for external scripts to finish before running tests
    var document = this.window.document;
    this.button = document.getElementById("the-button");
    this.text = document.getElementById("hidden-text");
    this.before = this.text.style.display;
  });

  // no clicks
  it("should hide text on page load", async function () {
    expect(this.before).toEqual("none");
  });

  // one click
  it("should toggle text display status when clicked once", async function() {
    this.button.click();
    expect(this.before).not.toEqual(this.text.style.display);
  });

  // two clicks
  it("should have original text display status when clicked twice", async function() {
    this.button.click();
    this.button.click();
    expect(this.before).toEqual(this.text.style.display);
  });
});