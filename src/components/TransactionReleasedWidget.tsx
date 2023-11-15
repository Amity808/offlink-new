import LoadingIcon from "./LoadingIcon";
import Link from "next/link";

const TransactionReleasedWidget = (): JSX.Element => {
  return (
    <section className="h-screen bg-[#8981b1]">
        <div className="w-full h-full flex items-center justify-center flex-col">
        <LoadingIcon />
        <p className="text-white text-2xl">Fund released, transaction completed. Kindly check your wallet to confim payment</p>
        <p className="text-white text-2xl">Thanks for chosing Offlink. Do you like to perform another transaction?</p>
        <Link href="/" className=" py-1 px-3 bg-white text-[7b64f2] rounded-lg">Home</Link>
      </div>
    </section>
  );
};

export default TransactionReleasedWidget;
