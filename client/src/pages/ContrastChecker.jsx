import React, { useState } from 'react';
import { getContrastRatio, isValidHex } from '../utils/color.js';
import { CheckCircle, XCircle } from 'lucide-react';

export default function ContrastChecker() {
  const [fg, setFg] = useState('#ffffff');
  const [bg, setBg] = useState('#7c3aed');

  const fgValid = isValidHex(fg) ? fg : '#ffffff';
  const bgValid = isValidHex(bg) ? bg : '#7c3aed';
  const ratio = getContrastRatio(fgValid, bgValid);
  const ratioFixed = ratio.toFixed(2);

  const aa = ratio >= 4.5;
  const aaLarge = ratio >= 3;
  const aaa = ratio >= 7;
  const aaaLarge = ratio >= 4.5;

  const Badge = ({ pass, label }) => (
    <div className={`flex items-center gap-2 p-3 rounded-xl ${pass ? 'bg-green-900/30 border border-green-800/50' : 'bg-red-900/30 border border-red-800/50'}`}>
      {pass ? <CheckCircle size={16} className="text-green-400 flex-shrink-0" /> : <XCircle size={16} className="text-red-400 flex-shrink-0" />}
      <div>
        <p className={`text-sm font-semibold ${pass ? 'text-green-400' : 'text-red-400'}`}>{pass ? 'Pass' : 'Fail'}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Contrast Checker</h1>
        <p className="text-gray-400 text-sm">Check WCAG 2.1 color contrast ratio for accessibility compliance.</p>
      </div>

      {/* Live Preview */}
      <div className="rounded-2xl p-8 mb-8 text-center border border-dark-600 transition-all duration-200"
        style={{ background: bgValid }}>
        <p className="text-2xl font-bold mb-1" style={{ color: fgValid }}>Sample Text</p>
        <p className="text-sm" style={{ color: fgValid }}>The quick brown fox jumps over the lazy dog</p>
        <p className="text-xs mt-2 font-bold" style={{ color: fgValid }}>SMALL BOLD TEXT SAMPLE</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { label: 'Foreground (Text)', value: fg, set: setFg, valid: fgValid },
          { label: 'Background', value: bg, set: setBg, valid: bgValid },
        ].map(col => (
          <div key={col.label} className="card p-5">
            <label className="label">{col.label}</label>
            <div className="flex gap-2">
              <input type="color" value={col.valid}
                onChange={e => col.set(e.target.value)}
                className="w-12 h-12 rounded-xl cursor-pointer bg-transparent border border-dark-600 p-1 flex-shrink-0" />
              <input className="input font-mono uppercase flex-1"
                value={col.value}
                onChange={e => col.set(e.target.value)}
                placeholder="#ffffff" maxLength={7} />
            </div>
          </div>
        ))}
      </div>

      {/* Ratio */}
      <div className="card p-6 text-center mb-6">
        <p className="text-5xl font-bold text-white mb-1">{ratioFixed}:1</p>
        <p className="text-gray-400 text-sm">Contrast Ratio</p>
        <div className="w-full bg-dark-700 rounded-full h-2 mt-4">
          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all"
            style={{ width: `${Math.min(100, (ratio / 21) * 100)}%` }} />
        </div>
      </div>

      {/* WCAG Results */}
      <div className="grid grid-cols-2 gap-3">
        <Badge pass={aa} label="AA — Normal text (≥4.5:1)" />
        <Badge pass={aaLarge} label="AA — Large text (≥3:1)" />
        <Badge pass={aaa} label="AAA — Normal text (≥7:1)" />
        <Badge pass={aaaLarge} label="AAA — Large text (≥4.5:1)" />
      </div>

      <div className="mt-8 card p-5 text-sm text-gray-400 leading-relaxed">
        <h3 className="text-white font-semibold mb-2">WCAG Contrast Standards</h3>
        <p><strong className="text-gray-300">AA</strong> is the minimum standard for most websites. Normal text (below 18pt) needs at least 4.5:1, large text (18pt+ or 14pt bold) needs 3:1.</p>
        <p className="mt-2"><strong className="text-gray-300">AAA</strong> is the enhanced standard for maximum accessibility, requiring 7:1 for normal text and 4.5:1 for large text.</p>
      </div>
    </div>
  );
}
