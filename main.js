function changeColor(id) {
  const text = document.getElementById(id);
  const main = document.getElementById("mainContent");
  const green = "rgb(0, 94, 0)";
  const pink = "rgb(233, 121, 182)";

  if (text.style.color === green) {
    text.style.color = "black";
    main.style.backgroundColor = "";
  } else {
    text.style.color = green;
    main.style.backgroundColor = pink;
  }
}
