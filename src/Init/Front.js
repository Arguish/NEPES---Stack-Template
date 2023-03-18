console.log("front ONLINE");

let publisher = document.querySelectorAll("#publisher");

console.log(publisher);

publisher.forEach((element, i) => {
  setTimeout(() => (element.className = "show"), 1000 * i);
  setTimeout(() => (element.className = "hide"), 1000 * i + 3000);
});
