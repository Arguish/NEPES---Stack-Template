async function POST(data) {
  let result = await window.Bridge.dbCreate(data);
  return result;
}

async function GET(data) {
  let result = await window.Bridge.dbRead(data);
  return result;
}

console.log(POST({ data: "some other data" }));

console.log(GET("algo"));
