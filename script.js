// Globally declared the textarea
const sentence = document.getElementById("editor");

// for bold,italic and underline
function formatText(type) {
  if (type == "font-bold") {
    sentence.classList.toggle(type);
    addBtnClassListWithToggle("bold-btn");
  } else if (type == "italic") {
    sentence.classList.toggle(type);
    addBtnClassListWithToggle("italic-btn");
  } else if (type == "underline") {
    sentence.classList.toggle(type);
    addBtnClassListWithToggle("underline-btn");
  }
}

// for text: left, right, center and justify
function textAlignLeft(data) {
    removeClassList("text-center","text-right","text-justify")
    addBtnClassList("text-left");
  sentence.classList.toggle("text-left");
}
function textAlignCenter(data) {
    removeClassList("text-left","text-right","text-justify")
    addBtnClassList("text-center");
  sentence.classList.toggle("text-center");
}
function textAlignRight(data) {
    removeClassList("text-left","text-center","text-justify")
    addBtnClassList("text-right");
  sentence.classList.toggle("text-right");
}
function textAlignJustify(data) {
    removeClassList("text-left","text-center","text-right")
    addBtnClassList("text-justify");
  sentence.classList.toggle("text-justify");
}
// to change font size
 function changeFontSize() {
  const fontNumber = document.getElementById("font-size");
  const value = fontNumber.value;
  sentence.style.fontSize = value + "px";
} 

// or

/* document.getElementById("font-size").addEventListener('change',function(){
  const fontNumber = document.getElementById("font-size");
  const value = fontNumber.value;
  sentence.style.fontSize = value + "px";
}); */

// uppercase, lowercase
