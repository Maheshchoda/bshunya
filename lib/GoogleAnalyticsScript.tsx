import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DMVTEYHBV6"
      />
      <Script strategy="afterInteractive" id="googl-analytics">
        {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DMVTEYHBV6');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
