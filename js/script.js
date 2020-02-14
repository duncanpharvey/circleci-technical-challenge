var toggleText = function (event) {
  console.log("pressed");
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

var onLoad = function (event) {
  document.addEventListener("DOMContentLoaded", click)
};

onLoad();