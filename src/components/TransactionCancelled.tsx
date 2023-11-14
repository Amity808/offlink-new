import LoadingIcon from "./LoadingIcon";
const TransactionCancelledWidget = (): JSX.Element => {
  return (
    <section className="h-screen bg-[#8981b1]">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <LoadingIcon />
      <p className="text-white text-2xl">Transaction Canceled. Thank you for choosing OFFLINK</p>
      </div>
    </section>
  );
};

export default TransactionCancelledWidget;
