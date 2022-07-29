import latest from "../src";

async function init() {
  console.log(await latest("https://blog.zenia.my.id"));
}

init();
