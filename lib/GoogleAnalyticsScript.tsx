import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DMVTEYHBV6"
      />
      <Script>
        {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DMVTEYHBV6');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
