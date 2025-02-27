"use client";

import { useEffect } from "react";

export default function ShopPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.ecwid.com/script.js?YOUR_STORE_ID";
    script.async = true;
    script.charSet = "UTF-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-4xl text-center">
        {/* Ecwid Storefront Embed */}
        <div>
          <script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?112674504&data_platform=code&data_date=2025-02-26" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-112674504");</script>
        </div>
      </div>
    </main>
  );
}