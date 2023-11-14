import LoadingIcon from "./LoadingIcon";

const TransactionReleasedWidget = (): JSX.Element => {
  return (
    <section className="h-screen bg-[#8981b1]">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <LoadingIcon />
        <p className="text-white text-2xl">Fund Released, Transaction Completed. Kindly check your wallet to confim payment</p>
        <p>Thanks for chosing Offlink</p>
      </div>
    </section>
  );
};

export default TransactionReleasedWidget;
