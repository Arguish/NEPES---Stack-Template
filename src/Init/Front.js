let publisher = document.querySelectorAll("#publisher");

function loopPublishers(array) {
  let exit = 0;
  array.forEach((element, i) => {
    exit += i + 1;
    showElem(element, i + 1, i + 1);
    if (i === array.length - 1) {
      setTimeout(
        () => (window.location.href = "../Main Page/index.html"),
        1000 * exit
      );
    }
  });
}

function showElem(elem, segs, hide) {
  setTimeout(() => {
    elem.className = "show";
    hideElem(elem, hide);
  }, 1000 * segs);
}

function hideElem(elem, segs) {
  setTimeout(() => (elem.className = "hide"), 1000 * segs);
}

loopPublishers(publisher);
