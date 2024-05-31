// index.d.ts

// 定义 colorPalette 中每种颜色的索引类型
type ColorPaletteShades =
  | 'gray'
  | 'red'
  | 'pink'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'choco'
  | 'brown'
  | 'sand'
  | 'camo'
  | 'jungle';
type ShadeLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ValidColorString = `${ColorPaletteShades}.${ShadeLevel}`;

export function getColors(colorString: ValidColorString): string | null;
