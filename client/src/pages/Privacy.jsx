import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-gray-400 leading-relaxed text-sm">
        <p>Last updated: March 2026</p>
        <h2 className="text-base font-semibold text-white">Information We Collect</h2>
        <p>ColorKit does not collect personal information. We do not require account registration and do not store any user data on our servers.</p>
        <h2 className="text-base font-semibold text-white">Image Processing</h2>
        <p>The Image Color Extractor tool processes images entirely within your browser using the HTML5 Canvas API. No image data is ever transmitted to or stored on our servers.</p>
        <h2 className="text-base font-semibold text-white">Cookies & Analytics</h2>
        <p>We may use anonymous analytics to understand how visitors use our site (e.g. page views, popular tools). This data is aggregated and cannot be used to identify individual users. We may display third-party advertisements (Google AdSense) which may use cookies as described in Google's Privacy Policy.</p>
        <h2 className="text-base font-semibold text-white">Third-Party Services</h2>
        <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visit to this and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-violet-400">Google Ads Settings</a>.</p>
        <h2 className="text-base font-semibold text-white">Contact</h2>
        <p>If you have questions about this policy, contact us at <a href="mailto:hello@colorkit.tools" className="text-violet-400">hello@colorkit.tools</a>.</p>
      </div>
    </div>
  );
}
