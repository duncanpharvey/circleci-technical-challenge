(function(exports) { 
     
  var toggleText = function(event) {
    var element = document.getElementById("hidden-text");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
  }

  var listenForButtonClick = function(event) {
      document.getElementById("the-button").addEventListener("click", toggleText);
  }

  var onLoad = function(event) {
    document.addEventListener("DOMContentLoaded", listenForButtonClick);
  }

  exports.toggleText = toggleText;
  exports.listenForButtonClick = listenForButtonClick;
  exports.onLoad = onLoad;
  
}) (typeof exports === "undefined"? this["common"]={}: exports); // give browser and node access to functions