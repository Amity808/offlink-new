import Preloader from "./Preloader";
import LoadingIcon from "./LoadingIcon";

const TransactionAcceptedWidget = (): JSX.Element => {
  return (
    <section className="h-screen bg-[#8981b1]">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <LoadingIcon />
      <p className="text-white text-2xl">Transaction Accepted. Kindly confirm the transaction and make payment</p>
      </div>
    </section>
  );
};

export default TransactionAcceptedWidget;
