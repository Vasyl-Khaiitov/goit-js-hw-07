function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changColorBodyBtn = document.querySelector("button.change-color");
const changeSpan = document.querySelector("span.color")
changColorBodyBtn.addEventListener("click", () => {
  const commonColor = getRandomHexColor();
  document.body.style.backgroundColor = commonColor;
  changeSpan.textContent = commonColor;
});

