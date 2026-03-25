import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import HexRgb from './pages/HexRgb.jsx';
import RgbHsl from './pages/RgbHsl.jsx';
import PaletteGenerator from './pages/PaletteGenerator.jsx';
import ImageColors from './pages/ImageColors.jsx';
import ContrastChecker from './pages/ContrastChecker.jsx';
import GradientMaker from './pages/GradientMaker.jsx';
import ColorMixer from './pages/ColorMixer.jsx';
import NamedColors from './pages/NamedColors.jsx';
import About from './pages/About.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Admin from './pages/Admin.jsx';

export default function App() {
  useEffect(() => {
    fetch('/api/visit', { method: 'POST' }).catch(() => {});
  }, []);

  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hex-rgb" element={<HexRgb />} />
        <Route path="rgb-hsl" element={<RgbHsl />} />
        <Route path="palette" element={<PaletteGenerator />} />
        <Route path="image-colors" element={<ImageColors />} />
        <Route path="contrast" element={<ContrastChecker />} />
        <Route path="gradient" element={<GradientMaker />} />
        <Route path="mixer" element={<ColorMixer />} />
        <Route path="named-colors" element={<NamedColors />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}
