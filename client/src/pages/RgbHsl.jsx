import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Copy } from 'lucide-react';
import { rgbToHsl, hslToRgb, rgbToHex } from '../utils/color.js';

export default function RgbHsl() {
  const [r, setR] = useState(124);
  const [g, setG] = useState(58);
  const [b, setB] = useState(237);

  const hsl = rgbToHsl(r, g, b);
  const hex = rgbToHex(r, g, b);

  const copy = (text) => { navigator.clipboard.writeText(text); toast.success('Copied!'); };

  const handleHsl = (nh, ns, nl) => {
    const { r: nr, g: ng, b: nb } = hslToRgb(nh, ns, nl);
    setR(nr); setG(ng); setB(nb);
  };

  const channels = [
    { label: 'R', value: r, set: v => { setR(v); }, color: 'bg-red-500', max: 255 },
    { label: 'G', value: g, set: v => { setG(v); }, color: 'bg-green-500', max: 255 },
    { label: 'B', value: b, set: v => { setB(v); }, color: 'bg-blue-500', max: 255 },
  ];

  const hslChannels = [
    { label: 'H', value: hsl.h, set: v => handleHsl(v, hsl.s, hsl.l), color: 'bg-gradient-to-r from-red-500 via-green-500 to-blue-500', max: 360, unit: '°' },
    { label: 'S', value: hsl.s, set: v => handleHsl(hsl.h, v, hsl.l), color: 'bg-violet-500', max: 100, unit: '%' },
    { label: 'L', value: hsl.l, set: v => handleHsl(hsl.h, hsl.s, v), color: 'bg-gray-400', max: 100, unit: '%' },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">RGB ↔ HSL Converter</h1>
        <p className="text-gray-400 text-sm">Convert between RGB and HSL color models interactively.</p>
      </div>

      <div className="w-full h-28 rounded-2xl mb-8 border border-dark-600 transition-all duration-200"
        style={{ background: hex }} />

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-white">RGB</h2>
            <button onClick={() => copy(`rgb(${r}, ${g}, ${b})`)} className="copy-btn flex items-center gap-1">
              <Copy size={11} /> Copy
            </button>
          </div>
          {channels.map(ch => (
            <div key={ch.label} className="flex items-center gap-3 mb-3">
              <span className={`w-5 h-5 rounded ${ch.color} text-xs flex items-center justify-center text-white font-bold flex-shrink-0`}>{ch.label}</span>
              <input type="range" min="0" max={ch.max} value={ch.value}
                onChange={e => ch.set(Number(e.target.value))} className="flex-1 accent-violet-500" />
              <input type="number" min="0" max={ch.max} value={ch.value}
                onChange={e => ch.set(Math.max(0, Math.min(ch.max, Number(e.target.value))))}
                className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded-lg text-sm text-white text-center" />
            </div>
          ))}
          <code className="text-xs text-violet-400 block mt-2">rgb({r}, {g}, {b})</code>
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-white">HSL</h2>
            <button onClick={() => copy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)} className="copy-btn flex items-center gap-1">
              <Copy size={11} /> Copy
            </button>
          </div>
          {hslChannels.map(ch => (
            <div key={ch.label} className="flex items-center gap-3 mb-3">
              <span className="w-5 h-5 rounded bg-violet-600 text-xs flex items-center justify-center text-white font-bold flex-shrink-0">{ch.label}</span>
              <input type="range" min="0" max={ch.max} value={ch.value}
                onChange={e => ch.set(Number(e.target.value))} className="flex-1 accent-violet-500" />
              <span className="w-14 text-sm text-white text-right font-mono">{ch.value}{ch.unit}</span>
            </div>
          ))}
          <code className="text-xs text-violet-400 block mt-2">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</code>
        </div>
      </div>

      <div className="card p-5 mt-6">
        <h2 className="font-semibold text-white mb-3">Output</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'HEX', value: hex.toUpperCase() },
            { label: 'RGB', value: `rgb(${r}, ${g}, ${b})` },
            { label: 'HSL', value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
            { label: 'CSS hsl()', value: `hsl(${hsl.h}deg ${hsl.s}% ${hsl.l}%)` },
          ].map(item => (
            <div key={item.label} className="bg-dark-700 rounded-xl p-3">
              <span className="text-xs text-gray-500 block mb-1">{item.label}</span>
              <span className="text-xs text-white font-mono break-all">{item.value}</span>
              <button onClick={() => copy(item.value)} className="mt-2 copy-btn text-xs flex items-center gap-1">
                <Copy size={10} /> Copy
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 card p-5 text-sm text-gray-400 leading-relaxed">
        <h3 className="text-white font-semibold mb-2">About HSL</h3>
        <p><strong className="text-gray-300">H (Hue)</strong> is the color angle on the color wheel (0–360°). <strong className="text-gray-300">S (Saturation)</strong> controls the intensity (0% = grey, 100% = vivid). <strong className="text-gray-300">L (Lightness)</strong> controls brightness (0% = black, 100% = white). HSL is more intuitive than RGB when you want to adjust how "light" or "vivid" a color is.</p>
      </div>
    </div>
  );
}
