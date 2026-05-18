const btnCelebrate = document.querySelector("button");

btnCelebrate.addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 140,
    origin: { y: 0.6 },
  });
});
