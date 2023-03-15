console.log("clicker ONLINE");

let button = document.querySelector("#clicker");
let points = document.querySelector("#puntos");

let cunter = 0;

const addPoint = () => {
  cunter++;
  points.innerHTML = `Points: ${cunter}`;
};

button.addEventListener("click", addPoint);
