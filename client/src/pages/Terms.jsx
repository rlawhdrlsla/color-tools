import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-white mb-8">Terms of Service</h1>
      <div className="space-y-6 text-gray-400 leading-relaxed text-sm">
        <p>Last updated: March 2026</p>
        <h2 className="text-base font-semibold text-white">Acceptance of Terms</h2>
        <p>By using ColorKit, you agree to these terms. If you do not agree, please do not use the service.</p>
        <h2 className="text-base font-semibold text-white">Use of Service</h2>
        <p>ColorKit provides free online color tools for personal and commercial use. You may use the outputs (converted values, generated palettes, CSS code) in your projects without restriction.</p>
        <h2 className="text-base font-semibold text-white">Disclaimer</h2>
        <p>ColorKit is provided "as is" without warranty of any kind. We do not guarantee the accuracy, completeness, or reliability of any tool output. Always verify results before using them in production environments.</p>
        <h2 className="text-base font-semibold text-white">Limitation of Liability</h2>
        <p>ColorKit shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the service.</p>
        <h2 className="text-base font-semibold text-white">Changes</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of the updated terms.</p>
        <h2 className="text-base font-semibold text-white">Contact</h2>
        <p>For questions regarding these terms, contact us at <a href="mailto:hello@colorkit.tools" className="text-violet-400">hello@colorkit.tools</a>.</p>
      </div>
    </div>
  );
}
