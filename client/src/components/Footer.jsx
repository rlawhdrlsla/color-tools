import React from 'react';
import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-dark-700 bg-dark-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                <Palette size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white">ColorKit</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Free online color tools for designers and developers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Tools</h3>
            <ul className="space-y-2">
              {[
                { label: 'HEX ↔ RGB', path: '/hex-rgb' },
                { label: 'RGB ↔ HSL', path: '/rgb-hsl' },
                { label: 'Palette Generator', path: '/palette' },
                { label: 'Contrast Checker', path: '/contrast' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-gray-500 hover:text-violet-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">More Tools</h3>
            <ul className="space-y-2">
              {[
                { label: 'Image Colors', path: '/image-colors' },
                { label: 'Gradient Maker', path: '/gradient' },
                { label: 'Color Mixer', path: '/mixer' },
                { label: 'CSS Named Colors', path: '/named-colors' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-gray-500 hover:text-violet-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', path: '/about' },
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms of Service', path: '/terms' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-gray-500 hover:text-violet-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-6 text-center">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} ColorKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
