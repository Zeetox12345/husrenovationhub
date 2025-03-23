import { Helmet } from "react-helmet";

const GoogleTag = () => {
  return (
    <Helmet>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16871318720"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16871318720');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTag; 