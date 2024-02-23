# tailwindcss-universal-colors

universal color palette for tailwindcss

![image](./assets/cover.png)

## install

```bash
# npm
npm install tailwindcss-universal-colors
# yarn
yarn add tailwindcss-universal-colors
# pnpm
pnpm add tailwindcss-universal-colors

```

## usage

```ts
// tailwind.config.js
import universalColors from 'tailwindcss-universal-colors';

export default {
  theme: {
    colors: {
      ...universalColors,
    },
  },
  // ...
};

// or commonjs for tailwind.config.cjs
const universalColors = require('tailwindcss-universal-colors');
module.exports = {
  theme: {
    colors: {
      ...universalColors,
    },
  },
  // ...
};
```
