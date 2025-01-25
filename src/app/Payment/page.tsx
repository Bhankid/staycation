import PaymentOne from "../components/PaymentOne";
import PaymentComplete from "../components/PaymentComplete";
import Payment from "../components/Payment";

function PaymentWrapper() {
  return (
    <div className="bg-white">
      <Payment />
      <PaymentOne />
      <PaymentComplete />
    </div>
  );
}

export default PaymentWrapper;
