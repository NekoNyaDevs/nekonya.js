# 🌿・NekoNya.js
[![version](https://img.shields.io/npm/v/nekonya.js?style=flat-square)](https://www.npmjs.com/package/nekonya.js)
[![downloads](https://img.shields.io/npm/dt/nekonya.js?style=flat-square)](https://www.npmjs.com/package/nekonya.js)
[![License](https://img.shields.io/github/license/NekoNyaDevs/nekonya.js?style=flat-square)](https://github.com/NekoNyaDevs/nekonya.js/blob/main/LICENSE)
[![Chat](https://img.shields.io/discord/919240056408014910?style=flat-square)](https://discord.gg/trAQZB67)
[![Dependents](https://img.shields.io/librariesio/dependents/npm/nekonya.js?style=flat-square)](https://www.npmjs.com/package/nekonya.js)

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
})();
```

## ❓・Documentation
See our [official docs](https://docs.classydev.fr/nekonya.js-docs).
- NekoNya
  - neko() - Returns a random neko image URL.
  - hug() - Returns a random hug image URL.
  - pat() - Returns a random pat image URL.
  - kiss() - Returns a random kiss image URL.
  - kitsune() - Returns a random kitsune image URL.
  - slap() - Returns a random slap image URL.
  - eightball(cute?: boolean) - Returns a random 8ball answer.
  - owoify(text: string) - Returns an owoified text.
  - get(endpoint: string) - Gets an image from the API (raw JSON) with a special endpoint parameter.

## 📜・License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧・Contact

You can contact me on [WorldWild Studios](https://worldwild.studio)'s official [Discord](https://discord.gg/Vh4bnWP5tc), or you can use my [contact email](mailto:contact@classy.works).

## 👥・Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.