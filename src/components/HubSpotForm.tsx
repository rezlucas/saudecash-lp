"use client";

import Script from "next/script";

export default function HubSpotForm() {
  return (
    <>
      <Script
        src="https://js.hsforms.net/forms/embed/50999563.js"
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="fb7c9ff8-ab5e-472e-89b2-7bf78127767b"
        data-portal-id="50999563"
      />
    </>
  );
}
