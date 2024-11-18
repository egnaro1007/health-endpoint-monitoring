'use client';
import { useEffect, useRef, useState } from 'react';

export default function InfoIframe({link}) {
    console.log("InfoIframe", link);
    const iframeRef = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && iframeRef.current) {
            const iframe = iframeRef.current;
            const onLoad = () => {
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                if (iframeDocument) {
                    const iframeBody = iframeDocument.body;
                    iframeBody.style.backgroundColor = '#fceae9';
                }
            };

            iframe.addEventListener('load', onLoad);

            return () => {
                iframe.removeEventListener('load', onLoad);
            };
        }
    }, [isClient]);


  return (
    <div className="w-full h-full mt-6 pb-6">
        {isClient && (
        <iframe
          ref={iframeRef}
          src={link}
          title="Info Embed Frame"
          className="w-full h-full border-none rounded-lg"
        />
      )}
      </div>
  );
}