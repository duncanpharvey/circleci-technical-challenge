const jsdom = require("jsdom");
const functions = require('../js/module.js');
const { JSDOM } = jsdom;
const document = new JSDOM(`<!DOCTYPE html><div id="hidden-text" style="display:none">You pressed it!</div>`).window.document;
global.document = document;

describe("Text Display", () => {
    it("should have a different display style after toggleText is called", () => {
      var mockElement = document.getElementById("hidden-text");
      var before = mockElement.style.display;
      functions.toggleText();
      var after = mockElement.style.display;
      expect(before).not.toEqual(after);
    })
  });