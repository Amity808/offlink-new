import Preloader from "./Preloader";
import LoadingIcon from "./LoadingIcon";
import { releaseFunds } from "@/helpers/offlink";

type TransactionAcceptedgetPramas = {
  id: string;
};


const TransactionAcceptedWidget = ({ id }: TransactionAcceptedgetPramas): JSX.Element => {
  return (
    <section className="h-screen bg-[#8981b1]">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <LoadingIcon />
      <p className="text-white text-2xl text-center">Transaction accepted by a trader. <br /> Kindly confirm the transaction and make payment</p>
      <button
        onClick={async () => {
          await releaseFunds(id);
        }} className=" text-white bg-[] mt-5 p-3"
      >Confirm Transaction</button>
      </div>
    </section>
  );
};

export default TransactionAcceptedWidget;
