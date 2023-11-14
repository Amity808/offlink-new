import LoadingIcon from "../LoadingIcon";

const PendingLoading = (): JSX.Element => {
  return (
    <section className="h-screen bg-red-200">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <LoadingIcon />
      <p className="text-white">Transaction pending. Waiting trader accept transaction</p>
      </div>
    </section>
  );
};

export default PendingLoading;
