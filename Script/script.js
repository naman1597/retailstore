function addTodo() {
    const inputElement = document.getElementById("myInput");
    if (!inputElement.value) {
      alert("Input Value is required");
    } else {
      const newTodo = document.createElement("li");
      newTodo.innerHTML = inputElement.value;
      const unorderedList = document.getElementById("myUL");
      unorderedList.prepend(newTodo);
      inputElement.value = "";
    }
  }
  
  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }