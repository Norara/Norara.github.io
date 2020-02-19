function useBurger() {
  var x = document.getElementById("burger-list");
  var y = document.getElementById("hamburger-button");
  if (x.className === "closed") {
    x.className = "open";
    y.className = "hamburger hamburger--squeeze is-active";
  } else {
    x.className = "closed";
    y.className = "hamburger hamburger--squeeze";
  }
}
