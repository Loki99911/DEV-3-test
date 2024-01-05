const renderText = (e) => {
  const inputField = document.getElementById("userInput");
  const wordHolder = document.querySelector(".wordHolder");

  const word = inputField.value.split("").map((leter) => {
    const leterElem = document.createElement("span");
    leterElem.textContent = leter;
    leterElem.draggable = true;
    leterElem.classList.add("leterElem");
    return leterElem;
  });
  wordHolder.append(...word);
  
};

export default renderText;
