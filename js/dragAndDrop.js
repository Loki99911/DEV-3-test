const dragAndDrop = () => {
  const leters = document.querySelectorAll(".leterElem");
  const dropField = document.querySelector(".wordHolder");

  leters.forEach((leter) => {
    leter.addEventListener("dragstart", dragStart);
    leter.addEventListener("dragend", dragEnd);
  });

  dropField.addEventListener("dragover", dragOver);
  dropField.addEventListener("dragenter", dragEnter);
  dropField.addEventListener("dragleave", dragLeave);
  dropField.addEventListener("drop", drop);

  let draggedLeter = null;

  function dragStart(e) {
    // e.dataTransfer.setDragImage(this, 25, 25);
    console.log("START");
    draggedLeter = this;
    this.classList.add("selected");
  }

  function dragEnd(e) {
    console.log("End");
    // console.log(e);
    draggedLeter.style.position = "absolute";
    draggedLeter.style.left = e.clientX + "px";
    draggedLeter.style.top = e.clientY + "px";
    draggedLeter.classList.remove("selected");
    draggedLeter = null;
  }

  function dragOver(e) {
    // if (!draggedShip) return;
    e.preventDefault();
  }

  function dragEnter(e) {
    // if (!draggedShip) return;
    e.preventDefault();
  }

  function dragLeave() {
    // if (!draggedShip) return;
    // const startSquere = +this.getAttribute("id");
    // shipAriaSelect(
    //   shipDirection,
    //   startSquere,
    //   shipLength,
    //   "shipAria",
    //   "remove"
    // );
  }

  function drop(e) {
    // if (!draggedShip) return;
    // let newElem = this;
    // const shipDirection = draggedShip.style.flexDirection;
    // const shipOnField = shipPut(shipLength, shipDirection, newElem, dropField);
    // if (shipOnField) {
    //   draggedShip.parentNode.nextElementSibling.querySelector(".ships_counter")
    //     .textContent--;
    //   btnDisabled();
    // }
  }
};
export default dragAndDrop;
