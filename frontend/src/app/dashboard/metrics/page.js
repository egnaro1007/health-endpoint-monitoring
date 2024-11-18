"use client";
import { lusitana } from '@/app/ui/fonts';
import { useEffect, useRef } from 'react';

export default function Page(props) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const onLoad = () => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const iframeBody = iframeDocument.body;
      iframeBody.style.backgroundColor = '#fceae9';
    };

    if (iframe) {
      iframe.addEventListener('load', onLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', onLoad);
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-xl md:text-2xl text-[#3b080f]`}>Metrics</h1>
      </div>
      <div className="w-full h-full mt-6">
        <iframe 
          id="metricsIframe"
          ref={iframeRef}
          src="/grafana/d/EgnaroDAS/host-and-docker-monitoring?kiosk&theme=light" 
          title="Metrics Dashboard"
          className="w-full h-full border-none rounded-lg"
        />
      </div>
    </div>
  );
}
