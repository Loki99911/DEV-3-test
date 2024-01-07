const dragAndDrop = () => {
  // console.log("DRAG&DROP");
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

  let draggedLeters = [];
  let startMouseX;
  let startMouseY;

  function dragStart(e) {
    // e.dataTransfer.setDragImage(this, 25, 25);
    const selectedElems = document.querySelectorAll(".selected");
    const rect = e.target.getBoundingClientRect();
      startMouseX = e.clientX;
      startMouseY = e.clientY;  
    if (selectedElems.length === 0) {
      draggedLeters.push(this);
      this.classList.add("selected");
    } else {
      draggedLeters.push(...selectedElems);
    }
  }

  function dragEnd(e) {
    const deltaX = e.clientX - startMouseX;
    const deltaY = e.clientY - startMouseY;
    draggedLeters.forEach((el) => {
      const rect = el.getBoundingClientRect();
      el.style.position = "absolute";
      el.style.left = rect.left + deltaX + "px";
      el.style.top = rect.top + deltaY + "px";
      el.classList.remove("selected");
    });

    // draggedLeters[0].style.position = "absolute";
    // draggedLeters[0].style.left = e.clientX + "px";
    // draggedLeters[0].style.top = e.clientY + "px";
    // draggedLeters[0].classList.remove("selected");
    startMouseX = 0;
    startMouseY = 0;
    draggedLeters = [];
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
