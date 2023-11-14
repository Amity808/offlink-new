import LoadingIcon from "../LoadingIcon";

const PendingLoading = (): JSX.Element => {
  return (
    <section className="h-screen bg-[#8981b1]">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <LoadingIcon />
      <p className="text-white text-2xl">Transaction pending. Waiting trader to accept transaction</p>
      </div>
    </section>
  );
};

export default PendingLoading;
