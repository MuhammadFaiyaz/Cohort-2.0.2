addEventListener("mousemove", function (e) {
  this.document.body.style.setProperty("--x", e.clientX + "px");
  this.document.body.style.setProperty("--y", e.clientY + "px");
});
