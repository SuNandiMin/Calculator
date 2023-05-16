function clearScreen() {
  document.getElementById("result").value = "";
}

function calculate() {
  var p = document.getElementById("result").value;
  // var q = eval(p);
  document.getElementById("result").value = eval(p);
}
