console.log("algo");

console.log(window.Bridge.dbCreate({ data: "some other data" }));

async function read() {
  const result = await window.Bridge.dbRead();
  return result;
}

console.log(read());
