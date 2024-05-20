import { FC } from 'react';
import colorsJson from '../../config/colors.json';
import { ToastProvider, useToast } from '@/components/Toast';
import { Check, Github } from 'lucide-react';
import { isDarkColor } from 'utils-gear';
interface ColorSchema {
  color: string;
  name: string;
}

const Home: FC = () => {
  const colorsPalette = colorsJson as ColorSchema[];
  const { toast } = useToast();
  const copyToClipboard = (text: string) => {
    window.navigator.clipboard.writeText(text).then(() => {
      toast('Copied', { icon: <Check size={18} className="text-green-5" /> });
    });
  };

  return (
    <div className="relative mx-auto w-[94%] h-screen">
      <a
        className="absolute right-0 top-2 flex items-center"
        href="https://github.com/CiroLee/tailwindcss-universial-colors"
        target="_blank"
        rel="noreferrer">
        <Github size={16} />
        <span className="inline-block ml-2">Github</span>
      </a>
      <h1 className="pt-12 text-[32px]">universal color palette for tailwindcss</h1>
      <p className="text-gray-5 text-sm my-4">
        click color block to copy color value and click text to copy color name
      </p>
      <div className="grid grid-cols-13 gap-y-6">
        {colorsPalette.map((item) => (
          <div className="cursor-pointer" key={item.name}>
            <div
              className="h-[64px] flex items-center justify-center transition-all group hover:scale-110"
              style={{ backgroundColor: item.color }}
              onClick={() => copyToClipboard(item.color)}>
              <p
                className={`text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity ${isDarkColor(item.color) ? 'text-neutral-100' : 'text-neutral-800'}`}>
                {item.color}
              </p>
            </div>
            <div
              className="relative hover:bg-gray-4/20 transition-colors flex justify-center items-center"
              onClick={() => copyToClipboard(item.name.toLocaleLowerCase())}>
              {item.name.toLocaleLowerCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}
