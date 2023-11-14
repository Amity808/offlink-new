import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Preloader from "@/components/Preloader";
import type { PropsWithChildren } from "react";

const ConnectLayout = ({ children }: PropsWithChildren) => {
  const { isConnecting, isDisconnected } = useAccount();

  if (isConnecting) return <Preloader />;

  if (isDisconnected) {
    return (
      <section className="h-[100vh] bg-red-200">
        <div className="w-full h-full flex items-center justify-center">
          <ConnectButton />
        </div>
      </section>
    );
  }

  return <>{children}</>;
};

export default ConnectLayout;
