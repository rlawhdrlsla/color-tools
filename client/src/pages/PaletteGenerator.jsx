import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Copy, RefreshCw } from 'lucide-react';
import { generatePalette, isValidHex, hexToRgb } from '../utils/color.js';

const paletteTypes = [
  { key: 'complementary', label: 'Complementary' },
  { key: 'analogous', label: 'Analogous' },
  { key: 'triadic', label: 'Triadic' },
  { key: 'splitComplementary', label: 'Split-Complementary' },
  { key: 'tetradic', label: 'Tetradic' },
  { key: 'shades', label: 'Shades' },
];

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;

function ColorSwatch({ hex }) {
  const copy = () => { navigator.clipboard.writeText(hex.toUpperCase()); toast.success('Copied!'); };
  return (
    <div className="group cursor-pointer" onClick={copy}>
      <div className="w-full h-16 rounded-xl mb-2 border border-dark-600 transition-transform group-hover:scale-105" style={{ background: hex }} />
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-gray-400">{hex.toUpperCase()}</span>
        <Copy size={11} className="text-gray-600 group-hover:text-violet-400 transition-colors" />
      </div>
    </div>
  );
}

export default function PaletteGenerator() {
  const [hex, setHex] = useState('#7c3aed');
  const [input, setInput] = useState('#7c3aed');

  const full = input.startsWith('#') ? input : `#${input}`;
  const valid = isValidHex(full) ? full : hex;
  const palette = generatePalette(valid);

  const handleInput = (val) => {
    setInput(val);
    const f = val.startsWith('#') ? val : `#${val}`;
    if (isValidHex(f)) setHex(f);
  };

  const randomize = () => {
    const h = randomHex();
    setInput(h);
    setHex(h);
  };

  const copyAll = (colors) => {
    navigator.clipboard.writeText(colors.join(', '));
    toast.success('All colors copied!');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Color Palette Generator</h1>
        <p className="text-gray-400 text-sm">Enter a base color to generate harmonious color palettes.</p>
      </div>

      <div className="card p-5 mb-8">
        <div className="flex gap-3 items-center">
          <input type="color" value={valid}
            onChange={e => handleInput(e.target.value)}
            className="w-12 h-12 rounded-xl cursor-pointer bg-transparent border border-dark-600 p-1 flex-shrink-0" />
          <input className="input flex-1 font-mono uppercase"
            value={input}
            onChange={e => handleInput(e.target.value)}
            placeholder="#7c3aed" maxLength={7} />
          <button onClick={randomize}
            className="flex-shrink-0 w-12 h-12 rounded-xl bg-dark-700 hover:bg-dark-600 border border-dark-600 flex items-center justify-center transition-colors">
            <RefreshCw size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {palette && paletteTypes.map(type => (
        <div key={type.key} className="card p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-white">{type.label}</h2>
            <button onClick={() => copyAll(palette[type.key])} className="copy-btn flex items-center gap-1">
              <Copy size={11} /> Copy All
            </button>
          </div>
          <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${palette[type.key].length}, 1fr)` }}>
            {palette[type.key].map((c, i) => <ColorSwatch key={i} hex={c} />)}
          </div>
        </div>
      ))}

      <div className="mt-4 card p-5 text-sm text-gray-400 leading-relaxed">
        <h3 className="text-white font-semibold mb-2">Color Harmony Guide</h3>
        <ul className="space-y-1.5">
          <li><strong className="text-gray-300">Complementary</strong> — Colors opposite on the wheel. High contrast.</li>
          <li><strong className="text-gray-300">Analogous</strong> — Colors adjacent on the wheel. Natural and harmonious.</li>
          <li><strong className="text-gray-300">Triadic</strong> — Three evenly spaced colors. Vibrant and balanced.</li>
          <li><strong className="text-gray-300">Split-Complementary</strong> — Base + two adjacent to its complement. Less tension than complementary.</li>
          <li><strong className="text-gray-300">Tetradic</strong> — Four colors in two complementary pairs. Rich, complex.</li>
        </ul>
      </div>
    </div>
  );
}
