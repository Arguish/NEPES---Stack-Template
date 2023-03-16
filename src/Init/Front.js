window.Bridge.dbCreate({ data: "some other data" }).then((a) => console.log(a));

window.Bridge.dbRead("algo")
  .then((a) => console.log(a))
  .catch((a) => console.log(a));
