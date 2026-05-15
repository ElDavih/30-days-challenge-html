const slider = document.querySelector("#slideNumber");

slider.addEventListener("input", function () {
  this.nextElementSibling.value = this.value;
});
