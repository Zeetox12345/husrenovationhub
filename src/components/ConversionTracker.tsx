import { Helmet } from "react-helmet";

interface ConversionTrackerProps {
  value?: number;
  currency?: string;
  transactionId?: string;
}

const ConversionTracker = ({
  value = 1.0,
  currency = "DKK",
  transactionId = ""
}: ConversionTrackerProps) => {
  return (
    <Helmet>
      {/* Event snippet for Køb conversion page */}
      <script>
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16871318720/ZOm5CP2e2K0aEMDJ7-w-',
            'value': ${value},
            'currency': '${currency}',
            'transaction_id': '${transactionId}'
          });
        `}
      </script>
    </Helmet>
  );
};

export default ConversionTracker; 