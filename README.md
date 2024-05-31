<div align="center">
  <img src="https://ciro.club/statics/images/icons/1717125146_50DWShhARrBQNOawbnv92.svg" width="256" height="256" alt="logo">
</div>

# tailwindcss-universal-colors

universal color palette for tailwindcss

![image](./assets/cover.png)

[preview](https://cirolee.github.io/tailwindcss-universal-colors/)

## install

```bash
# npm
npm install tailwindcss-universal-colors -D
# yarn
yarn add tailwindcss-universal-colors -D
# pnpm
pnpm add tailwindcss-universal-colors -D

```

## usage

### use as extended colors

```ts
// tailwind.config.mjs
import universalColors from 'tailwindcss-universal-colors';

export default {
  theme: {
    extend: {
      colors: {
        ...universalColors,
      },
    },
  },
  // ...
};
```

### `getColors` helps get color value

```ts
import { getColors } from 'tailwindcss-universal-colors';

getColors('gray.0'); // #F8FAFB
```

## inspired

[colar](https://github.com/fchristant/colar)
