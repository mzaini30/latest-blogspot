// import fetch from "node-fetch";

// https://scrappy-php.herokuapp.com/?url=
// https://api.allorigins.win/raw?url=
// https://cors.eu.org/
// https://cors-proxy.tk/?url=

export default async function (link: string, limit?: number) {
  let limitnya = "";
  if (limit) {
    limitnya = `&max-results=${limit}`;
  }

  let data: any = await fetch(
    `https://cors.eu.org/${link}/feeds/posts/default?alt=json${limitnya}`
  );
  data = await data.json();

  let hasil: any;
  hasil = {
    info: {
      kategori: [],
      judul: data.feed.title["$t"],
      deskripsi: data.feed.subtitle["$t"],
      author: data.feed.author[0].name["$t"],
      thumbnail: `https:${data.feed.author[0]["gd$image"].src}`,
    },
    blog: [],
  };

  for (let x of data.feed.category) {
    hasil.info.kategori.push(x.term);
  }

  for (let x of data.feed.entry) {
    hasil.blog.push({
      judul: x.title["$t"],
      link: x.link[4].href,
      published: x.published["$t"],
      updated: x.updated["$t"],
      thumbnail: x["media$thumbnail"].url.replace("/s72-", "/"),
    });
  }
  return hasil;
}
