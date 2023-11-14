import LoadingIcon from "../LoadingIcon";

const PendingLoading = (): JSX.Element => {
  return (
    <section className="h-screen bg-red-200">
      <div className="w-full h-full flex items-center justify-center">
        <LoadingIcon />
      </div>
      <p>Transaction pending. Waiting </p>
    </section>
  );
};

export default PendingLoading;
