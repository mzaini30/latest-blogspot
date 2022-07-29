import fetch from "node-fetch";

export default async function (link: string) {
  let data: any = await fetch(`${link}/feeds/posts/default?alt=json`);
  data = await data.json();

  let hasil: any;
  hasil = {
    info: {
      kategori: [],
    },
    blog: "",
  };

  for (let x of data.feed.category) {
    hasil.info.kategori.push(x.term);
  }
  return hasil;
}
