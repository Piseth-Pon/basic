
function randomBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = `rgba(${Math.random() * 255, Math.random() * 255, Math.random() * 255, 1})`
}



window.addEventListener("DOMContentLoaded", () => {
  console.log("everything is ready")
  randomBackground()
})