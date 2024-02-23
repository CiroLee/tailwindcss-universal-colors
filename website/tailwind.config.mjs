/** @type {import('tailwindcss').Config} */
// commonjs: const universalColors = require('../')
import universalColors from '../index';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...universalColors
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))'
      },
      boxShadow: {
        around: ['4px 14px 20px -6px rgba(0, 0, 0, 0.1)', '-4px -4px 16px -4px rgba(0,0,0,0.1)']
      }
    }
  },
  plugins: []
};
