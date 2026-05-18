const [sectionHTML, sectionCSS, sectionJS] = document.querySelectorAll("section");

const [btnHTML, btnCSS, btnJS] = document.querySelectorAll("button");

btnHTML.addEventListener("click", () => {
  sectionHTML.toggleAttribute("hidden");

  sectionJS.setAttribute("hidden", "");
  sectionCSS.setAttribute("hidden", "");

  btnHTML.classList.toggle("active");
  btnCSS.classList.remove("active");
  btnJS.classList.remove("active");
});

btnCSS.addEventListener("click", () => {
  sectionCSS.toggleAttribute("hidden");

  sectionHTML.setAttribute("hidden", "");
  sectionJS.setAttribute("hidden", "");

  btnCSS.classList.toggle("active");
  btnHTML.classList.remove("active");
  btnJS.classList.remove("active");
});

btnJS.addEventListener("click", () => {
  sectionJS.toggleAttribute("hidden");

  sectionHTML.setAttribute("hidden", "");
  sectionCSS.setAttribute("hidden", "");

  btnJS.classList.toggle("active");
  btnCSS.classList.remove("active");
  btnHTML.classList.remove("active");
});
