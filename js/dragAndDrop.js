const dragAndDrop = () => {
  const leters = document.querySelectorAll(".leterElem");
  const dropField = document.querySelector(".wordHolder");

  leters.forEach((leter) => {
    leter.addEventListener("dragstart", dragStart);
    leter.addEventListener("dragend", dragEnd);
  });

  dropField.addEventListener("dragover", dragOver);

  let draggedLeters = [];
  let relativePositions = [];
  let startMouseX;
  let startMouseY;
  let dropToElement;

  function dragStart(e) {
    e.dataTransfer.effectAllowed = "move";
    const selectedElems = document.querySelectorAll(".selected");
    const rect = e.target.getBoundingClientRect();
    startMouseX = e.clientX;
    startMouseY = e.clientY;

    if (selectedElems.length === 0) {
      draggedLeters.push(this);
      relativePositions.push({
        x: rect.left,
        y: rect.top,
      });
      this.classList.add("selected");
    } else {
      draggedLeters.push(...selectedElems);
      relativePositions = [];
      selectedElems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        relativePositions.push({
          x: rect.left,
          y: rect.top,
        });
      });
    }
  }

  function dragEnd(e) {
    const deltaX = e.clientX - startMouseX;
    const deltaY = e.clientY - startMouseY;
    draggedLeters.forEach((el, index) => {
      el.style.position = "absolute";
      el.style.left = deltaX + relativePositions[index].x + "px";
      el.style.top = deltaY + relativePositions[index].y + "px";
      el.classList.remove("selected");
      if (dropToElement) {
        dropToElement.style.position = "absolute";
        dropToElement.style.left = relativePositions[index].x + "px";
        dropToElement.style.top = relativePositions[index].y + "px";
      }
    });

    startMouseX = 0;
    startMouseY = 0;
    draggedLeters = [];
    relativePositions = [];
  }

  function dragOver(e) {
    dropToElement = e.target.classList.contains("leterElem") ? e.target : null;
    e.preventDefault();
  }
};
export default dragAndDrop;
