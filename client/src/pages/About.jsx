import React from 'react';
import { Palette } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
          <Palette size={18} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">About ColorKit</h1>
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-gray-400 leading-relaxed">
        <p>ColorKit is a free collection of online color tools designed for designers, developers, and anyone who works with color. Our goal is to make color conversion and exploration fast, simple, and accessible — no account required, no paywalls.</p>

        <h2 className="text-lg font-semibold text-white">What we offer</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>HEX ↔ RGB Converter — instantly convert between hex codes and RGB values</li>
          <li>RGB ↔ HSL Converter — switch between color models with real-time preview</li>
          <li>Palette Generator — create harmonious color schemes from any base color</li>
          <li>Image Color Extractor — pull dominant colors from any image</li>
          <li>Contrast Checker — verify WCAG 2.1 accessibility compliance</li>
          <li>Gradient Maker — build CSS gradients visually</li>
          <li>Color Mixer — blend two colors at any ratio</li>
          <li>CSS Named Colors — browse all 140 standard CSS color names</li>
        </ul>

        <h2 className="text-lg font-semibold text-white">Privacy</h2>
        <p>All processing happens in your browser. When you use the Image Color Extractor, your images are never uploaded to our servers — the Canvas API processes everything locally on your device.</p>

        <h2 className="text-lg font-semibold text-white">Contact</h2>
        <p>Have a feature request or found a bug? We'd love to hear from you. Email us at <a href="mailto:hello@colorkit.tools" className="text-violet-400 hover:text-violet-300">hello@colorkit.tools</a></p>
      </div>
    </div>
  );
}
