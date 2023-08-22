// common function
function addBtnClassListWithToggle(id) {
    document.getElementById(id).classList.toggle("bg-blue-500");
  }
  
  function addBtnClassList(id) {
      document.getElementById(id).classList.toggle("bg-blue-500");
    }
  
  function removeClassList(id1,id2,id3) {
      document.getElementById(id1).classList.remove("bg-blue-500","active");
      document.getElementById(id2).classList.remove("bg-blue-500","active");
      document.getElementById(id3).classList.remove("bg-blue-500","active");
      sentence.classList.remove(id1,id2,id3);
    }