function selection() {
  
  let isSelecting = false;
  let isCtrlActive = false;
  let startCoords = { x: 0, y: 0 };
  let endCoords = { x: 0, y: 0 };

  function startSelection(event) {
    // console.log("SELECTION");
    const elements = document.querySelectorAll(".leterElem");
    if ((event.target.className === "leterElem" && !isCtrlActive)) return;
    if (isCtrlActive) {
      return event.target.classList.contains("selected")
        ? event.target.classList.remove("selected")
        : event.target.classList.add("selected");
    }
    if (event.target.className.includes("leterElem")) return;
    elements.forEach((element) => element.classList.remove("selected"));
    isSelecting = true;
    startCoords = { x: event.clientX, y: event.clientY };
    const highlightRectangle = document.createElement("div");
    highlightRectangle.className = "highlight-rectangle";
    document.querySelector(".wordHolder").appendChild(highlightRectangle);
  }

  function updateSelection(event) {
    if (!isSelecting) return;

    endCoords = { x: event.clientX, y: event.clientY };

    // Обновляем размеры и положение прямоугольника выделения
    const highlightRectangle = document.querySelector(".highlight-rectangle");
    highlightRectangle.style.left = Math.min(startCoords.x, endCoords.x) + "px";
    highlightRectangle.style.top = Math.min(startCoords.y, endCoords.y) + "px";
    highlightRectangle.style.width =
      Math.abs(startCoords.x - endCoords.x) + "px";
    highlightRectangle.style.height =
      Math.abs(startCoords.y - endCoords.y) + "px";

    // Выделяем символы внутри прямоугольника
    highlightText();
  }

  function endSelection() {
    isSelecting = false;
    const highlightRectangle = document.querySelector(".highlight-rectangle");
    if (highlightRectangle) {
      highlightRectangle.remove();
    }
  }

  function highlightText() {
    const elements = document.querySelectorAll(".leterElem");

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Проверяем, пересекается ли символ с прямоугольником выделения
      if (
        rect.left < Math.max(startCoords.x, endCoords.x) &&
        rect.right > Math.min(startCoords.x, endCoords.x) &&
        rect.top < Math.max(startCoords.y, endCoords.y) &&
        rect.bottom > Math.min(startCoords.y, endCoords.y)
      ) {
        // Добавляем класс выделения
        element.classList.add("selected");
      } else {
        // Удаляем класс выделения
        element.classList.remove("selected");
      }
      // }
    });
  }

  function ctrlActivation(event) {
    if (event.ctrlKey) {
      isCtrlActive = true;
    }
  }
  function ctrlDeactivation(event) {
    if (event.key === "Control") {
      isCtrlActive = false;
    }
  }

  document.addEventListener("mousedown", startSelection);
  document.addEventListener("mousemove", updateSelection);
  document.addEventListener("mouseup", endSelection);
  document.addEventListener("keydown", ctrlActivation);
  document.addEventListener("keyup", ctrlDeactivation);
}
export default selection;
