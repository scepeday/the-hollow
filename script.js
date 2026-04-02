const bgMusic = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  bgMusic.play();
  setTimeout(() => {
    window.location.href = "/pages/instructions_page.html";
  }, 300);
});