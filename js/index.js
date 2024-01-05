import renderText from "./renderText.js";
import selection from "./selection.js";
import dragAndDrop from "./dragAndDrop.js";

const startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", () => {
  renderText();
  dragAndDrop();
});
selection();
