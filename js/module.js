(function(exports) { 
     
  var toggleText = function (event) {
    var element = document.getElementById("hidden-text");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
  }

  var listenForButtonClick = function (event) {
    var button = document.getElementById("the-button");
    if (button) {
      button.addEventListener("click", toggleText);
    }
  }

  exports.toggleText = toggleText;
  exports.listenForButtonClick = listenForButtonClick;
  
}) (typeof exports === "undefined"? this["module"]={}: exports); 