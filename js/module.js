(function(exports) { 
     
  var toggleText = function (event) {
    var element = document.getElementById("hidden-text");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
  }

  var click = function (event) {
    var button = document.querySelector("button");
    if (button) {
      button.addEventListener("click", toggleText);
    }
  }

  exports.toggleText = toggleText;
  exports.click = click;
  
}) (typeof exports === 'undefined'? this['module']={}: exports); 