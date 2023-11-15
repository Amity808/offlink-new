import LoadingIcon from "./LoadingIcon";
import { cancelTransaction } from "@/helpers/offlink";

type TransactionCancelgetPramas = {
  id: string;
};
const TransactionCancelledWidget = ({ id }: TransactionCancelgetPramas): JSX.Element => {
  return (
    <section className="h-screen bg-[#8981b1]">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <LoadingIcon />
      <p className="text-white text-2xl">Transaction Canceled. Thank you for choosing OFFLINK</p>
      <button
        onClick={async () => {
          await cancelTransaction(id);
        }}
      >Confirm Transaction</button>
      </div>
    </section>
  );
};

export default TransactionCancelledWidget;
