const Reporter = require('jasmine-console-reporter');
jasmine.getEnv().addReporter(new Reporter());

const jsdom = require("jsdom");
const functions = require('../js/module.js');
const { JSDOM } = jsdom;

describe("Text Display", () => {
  beforeEach(function() {
    var document = new JSDOM('<!DOCTYPE html><div id="hidden-text" style="display:none">You pressed it!</div>').window.document;
    global.document = document;
  });
  
  it("should be hidden on page load", () => {
    var mockElement = document.getElementById('hidden-text');
    console.log("before: " + mockElement.style.display)
    expect(mockElement.style.display).toEqual('none');
  })

  it("should have a different display style after toggleText is called once", () => {
    var mockElement = document.getElementById('hidden-text');
    var before = mockElement.style.display;
    console.log("before: " + before)
    functions.toggleText();
    var after = mockElement.style.display;
    console.log("after: " + after)
    expect(before).not.toEqual(after);
  })

  it("should have the same display style after toggleText is called twice", () => {
    var mockElement = document.getElementById('hidden-text');
    var before = mockElement.style.display;
    console.log("before: " + before)
    functions.toggleText();
    functions.toggleText();
    var after = mockElement.style.display;
    console.log("after: " + after)
    expect(before).toEqual(after);
  })
});