import latest from "../src";

async function init() {
  let hasil = await latest("https://blog.zenia.my.id", 2);
  hasil = JSON.stringify(hasil, null, 2);
  console.log(hasil);
}

init();
