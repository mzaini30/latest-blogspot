# latest-blogspot

Mendapatkan list artikel terbaru dari Blogspot

## Contoh Mendapatkan Semua Artikel Terbaru

```typescript
import latest from "latest-blogspot";

async function init() {
  let hasil = await latest("https://blog.zenia.my.id");
  hasil = JSON.stringify(hasil, null, 2);
  console.log(hasil);
}

init();
```

Hasil:

```json
{
  "info": {
    "kategori": ["automa", "psikologi", "typescript", "vue"],
    "judul": "Blog Zenia",
    "deskripsi": "Ini adalah kumpulan tulisan yang dibuat oleh Zen",
    "author": "Zen",
    "thumbnail": "https://3.bp.blogspot.com/-r7ZpkSqvmOs/X7CEci2KJkI/AAAAAAAAD-s/63i6sXfbtv0gyd53GlRYL-tDSVeH4hNOACK4BGAYYCw/s220/IMG-20201115-WA0002.jpg"
  },
  "blog": [
    {
      "judul": "Vue: Latihan Prop dan Emit",
      "link": "https://blog.zenia.my.id/2022/07/vue-latihan-prop-dan-emit.html",
      "published": "2022-07-11T08:05:00.001-07:00",
      "updated": "2022-07-11T08:19:27.631-07:00",
      "thumbnail": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX2KK969v2g_7SEhRsY_ACpN0waw7edGGpbw82_qbgHuL3KrE45nme0PpYeLeNbt3GR2xrAbD30ARi76EJ3VC-cv5mdFoO9-iyO05YxmgAEode7HEm9wE4Nm_faYql50kFlmovlcB9OWyeiQqC-7XibEAtoNUWxhmMnqXNO5vk6-gKb32VETPpxkIroA/w640-h427-c/vlad-bagacian-d1eaoAabeXs-unsplash.jpg"
    },
    {
      "judul": "Cara Import Workflow di Automa",
      "link": "https://blog.zenia.my.id/2022/07/cara-import-workflow-di-automa.html",
      "published": "2022-07-02T08:53:00.002-07:00",
      "updated": "2022-07-11T08:19:45.432-07:00",
      "thumbnail": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBJFJmgNNzk9jBXx17WStbpTW8Y_DSwKfAHUFmVeTGtg8bHB1WgMRVTyvMww_ZqRqnRxCHvz0AB4r6GYg9tt-mx60ZWJhorDtndXePIovtnXoInMP-CzqjK2uiBOJi-tr4RM_c8bO2Su2DW6jzpjNFjNpZ8P42S93_U7XJk91oKCM0s_JRMYWzQR7RYQ/w640-h426-c/arnold-francisca-nPhl2x4fk2s-unsplash.jpg"
    },
    {
      "judul": "Bagaimana Caranya Sukses?",
      "link": "https://blog.zenia.my.id/2022/07/bagaimana-caranya-sukses.html",
      "published": "2022-07-01T09:05:00.007-07:00",
      "updated": "2022-07-11T08:20:01.531-07:00",
      "thumbnail": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_ZkXGacakQNerSJmMpAnBxa4UhHO8mf7ZJo-Xpv5Noxkbz36BFL46HMzY7Pc5_Hg8K_IeUYqn5GEzqZhkVc55rq8zLCjRcpjUtkguvWa7nrbXzkn1FaEV0IwrtfaB_ASiAwVL5BDjNXNpETE7NDnAUg5RvFgu5Tyh3wOrra8HtIeRAE2-YlLg5248Bg/w640-h428-c/lina-trochez-ktPKyUs3Qjs-unsplash.jpg"
    },
    {
      "judul": "Cara Menggunakan TypeScript, Menjalankannya, dan Mengcompile-nya",
      "link": "https://blog.zenia.my.id/2022/06/cara-menggunakan-typescript.html",
      "published": "2022-06-30T06:29:00.007-07:00",
      "updated": "2022-07-11T08:20:19.913-07:00",
      "thumbnail": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGkI_hocoowNoSvZB4TRJTffKUKZxmellTRJV2jS5GAZVNlvalCNFhWzURg40DLC0TO8LgInIsIA6kYAuOBMktVtpVEQnPx0upU4F5iLWdrI1vVU_hVPA0iqueJRFEpfrdPiqJjymRkDeux2BR2khvV3EWhW74Y0ZAnWGRhRPWhY4zAGPFTc87XUny0Q/w640-h426-c/elena-taranenko-hCUA4xtxVTA-unsplash.jpg"
    }
  ]
}
```

## Contoh Mendapatkan Dua Artikel Terbaru

```typescript
import latest from "latest-blogspot";

async function init() {
  let hasil = await latest("https://blog.zenia.my.id", 2);
  hasil = JSON.stringify(hasil, null, 2);
  console.log(hasil);
}

init();
```

Hasil:

```json
{
  "info": {
    "kategori": ["automa", "psikologi", "typescript", "vue"],
    "judul": "Blog Zenia",
    "deskripsi": "Ini adalah kumpulan tulisan yang dibuat oleh Zen",
    "author": "Zen",
    "thumbnail": "https://3.bp.blogspot.com/-r7ZpkSqvmOs/X7CEci2KJkI/AAAAAAAAD-s/63i6sXfbtv0gyd53GlRYL-tDSVeH4hNOACK4BGAYYCw/s220/IMG-20201115-WA0002.jpg"
  },
  "blog": [
    {
      "judul": "Vue: Latihan Prop dan Emit",
      "link": "https://blog.zenia.my.id/2022/07/vue-latihan-prop-dan-emit.html",
      "published": "2022-07-11T08:05:00.001-07:00",
      "updated": "2022-07-11T08:19:27.631-07:00",
      "thumbnail": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX2KK969v2g_7SEhRsY_ACpN0waw7edGGpbw82_qbgHuL3KrE45nme0PpYeLeNbt3GR2xrAbD30ARi76EJ3VC-cv5mdFoO9-iyO05YxmgAEode7HEm9wE4Nm_faYql50kFlmovlcB9OWyeiQqC-7XibEAtoNUWxhmMnqXNO5vk6-gKb32VETPpxkIroA/w640-h427-c/vlad-bagacian-d1eaoAabeXs-unsplash.jpg"
    },
    {
      "judul": "Cara Import Workflow di Automa",
      "link": "https://blog.zenia.my.id/2022/07/cara-import-workflow-di-automa.html",
      "published": "2022-07-02T08:53:00.002-07:00",
      "updated": "2022-07-11T08:19:45.432-07:00",
      "thumbnail": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBJFJmgNNzk9jBXx17WStbpTW8Y_DSwKfAHUFmVeTGtg8bHB1WgMRVTyvMww_ZqRqnRxCHvz0AB4r6GYg9tt-mx60ZWJhorDtndXePIovtnXoInMP-CzqjK2uiBOJi-tr4RM_c8bO2Su2DW6jzpjNFjNpZ8P42S93_U7XJk91oKCM0s_JRMYWzQR7RYQ/w640-h426-c/arnold-francisca-nPhl2x4fk2s-unsplash.jpg"
    }
  ]
}
```
