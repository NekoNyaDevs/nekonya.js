# 🌿・NekoNya.js
[![npm](https://img.shields.io/npm/v/nekonya.js?style=flat-square)](https://www.npmjs.com/package/nekonya.js)
[![npm](https://img.shields.io/npm/dt/nekonya.js?style=flat-square)](https://www.npmjs.com/package/nekonya.js)
[![GitHub](https://img.shields.io/github/license/WorldWildStudios/nekonya.js?style=flat-square)](https://github.com/NekoNyaDevs/nekonya.js/blob/main/LICENSE)

NekoNya.js is a NekoNya API wrapper for Node.js.

## ➕・Installation

```bash
npm i nekonya.js
```

## 📝・Usage

```js
const NekoNya = require('nekonya.js');

(async () => {
    const url = await NekoNya.neko();
    console.log(url);
})()
```

## ❓・Documentation

- NekoNya
- - neko() - Returns a random neko image URL.
- - hug() - Returns a random hug image URL.
- - pat() - Returns a random pat image URL.
- - kiss() - Returns a random kiss image URL.
- - kitsune() - Returns a random kitsune image URL.
- - get(endpoint: string) - Gets an image from the API (raw JSON) with a special endpoint parameter.

## 📜・License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧・Contact

You can contact me on [WorldWild Studios](https://worldwild.studio) official [Discord](https://discord.gg/Vh4bnWP5tc), or you can use my [contact email](mailto:contact@classy.works).

## 👥・Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.