async function POST() {
  let result = await window.Bridge.dbCreate({ data: "some other data" });
  return result;
}

POST().then(console.log());
