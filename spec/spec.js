describe("Text Display", () => {
    it("should have a different display style after toggleText is called", () => {
      var mockElement = document.createElement('div');
      mockElement.setAttribute("id", "hidden-text");
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(mockElement);

      mockElement.style.display = "none";
      var before = mockElement.style.display;
      toggleText();
      var after = mockElement.style.display;
      expect(before).not.toEqual(after);
    }
    )
  });