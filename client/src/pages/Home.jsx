import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, ArrowRight, Shuffle, Image, Eye, Layers, Droplets, Hash } from 'lucide-react';

const tools = [
  {
    icon: Hash,
    label: 'HEX ↔ RGB Converter',
    desc: 'Convert between HEX color codes and RGB values instantly.',
    path: '/hex-rgb',
    color: 'from-violet-600 to-violet-400',
  },
  {
    icon: Layers,
    label: 'RGB ↔ HSL Converter',
    desc: 'Convert between RGB and HSL color models.',
    path: '/rgb-hsl',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Palette,
    label: 'Palette Generator',
    desc: 'Generate complementary, analogous, triadic, and tetradic palettes.',
    path: '/palette',
    color: 'from-pink-600 to-pink-400',
  },
  {
    icon: Image,
    label: 'Image Color Extractor',
    desc: 'Upload an image and extract the dominant colors.',
    path: '/image-colors',
    color: 'from-amber-600 to-amber-400',
  },
  {
    icon: Eye,
    label: 'Contrast Checker',
    desc: 'Check WCAG contrast ratio between two colors for accessibility.',
    path: '/contrast',
    color: 'from-green-600 to-green-400',
  },
  {
    icon: Layers,
    label: 'Gradient Maker',
    desc: 'Create CSS gradients visually and copy the code.',
    path: '/gradient',
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    icon: Droplets,
    label: 'Color Mixer',
    desc: 'Blend two colors together and see the result at different ratios.',
    path: '/mixer',
    color: 'from-rose-600 to-rose-400',
  },
  {
    icon: Shuffle,
    label: 'CSS Named Colors',
    desc: 'Browse all 140 CSS named colors with HEX and RGB values.',
    path: '/named-colors',
    color: 'from-indigo-600 to-indigo-400',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark-900 pt-16 pb-14 px-4 border-b border-dark-700">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-900/40 text-violet-400 text-xs font-semibold mb-5 border border-violet-800/50">
            <Palette size={12} strokeWidth={2.5} />
            8 Free Color Tools
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Color Tools for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              Designers & Developers
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Convert, generate, and explore colors. HEX, RGB, HSL, palettes, gradients — all free, no signup required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.path}
                to={tool.path}
                className="card p-5 hover:border-violet-700 transition-all duration-200 group hover:-translate-y-1"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                  <Icon size={18} className="text-white" strokeWidth={2} />
                </div>
                <h2 className="font-semibold text-white text-sm mb-1.5 group-hover:text-violet-400 transition-colors">
                  {tool.label}
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{tool.desc}</p>
                <div className="flex items-center gap-1 text-xs text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Open tool <ArrowRight size={11} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-dark-800/50 border-y border-dark-700 py-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            { title: '100% Free', desc: 'All tools are completely free to use, forever.' },
            { title: 'No Login Required', desc: 'Use any tool instantly without creating an account.' },
            { title: 'Privacy First', desc: 'Image processing happens in your browser. Nothing is uploaded.' },
          ].map(f => (
            <div key={f.title} className="p-6 card">
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
