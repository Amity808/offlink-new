import { ReactElement, useMemo } from "react";
import WagmiWrapperLayout from "@/layouts/Wagmi";
import dynamic from "next/dynamic";
import useTransactionAccepted from "@/hooks/useTransactionAccepted";
import { useParams } from "next/navigation";
import useGetTransactionByID from "@/hooks/useGetTransactionByID";
import Preloader from "@/components/Preloader";
import AuthMiddleware from "@/middlewares/auth/AuthMiddleware";
import useTransactionCompleted from "@/hooks/useTransactionCompleted";
import TransactionCompletedWidget from "@/components/TransactionCompletedWidget";
import TransactionAcceptedWidget from "@/components/TransactionAcceptedWidget";
import useTransactionCancelled from "@/hooks/useTransactionCancelled";
import useTransactionReleased from "@/hooks/useTransactionReleased";
import useTransactionRefunded from "@/hooks/useTransactionRefunded";
import TransactionReleasedWidget from "@/components/TransactionReleasedWidget";
import TransactionRefundedWidget from "@/components/TransactionRefundedWidget";
import TransactionCancelledWidget from "@/components/TransactionCancelled";

const ConnectLayout = dynamic(() => import("@/layouts/Connect"), {
  ssr: false,
});

const OffRamp = () => {
  const param = useParams();

  const parsedID = useMemo((): string => {
    if (!param) return "";

    const id = param.id;

    if (typeof id === "object") {
      return id[0];
    }

    return id;
  }, [param]);

  const { transaction } = useGetTransactionByID(parsedID);

  const { accepted } = useTransactionAccepted(transaction ?? { id: "" });

  const { completed } = useTransactionCompleted(transaction ?? { id: "" });

  const { cancelled } = useTransactionCancelled(transaction ?? { id: "" });

  const { refunded } = useTransactionRefunded(transaction ?? { id: "" });

  const { released } = useTransactionReleased(transaction ?? { id: "" });

  if (released) return <TransactionReleasedWidget />;

  if (refunded) return <TransactionRefundedWidget />;

  if (cancelled) return <TransactionCancelledWidget />;

  if (accepted) return <TransactionAcceptedWidget />;

  if (completed)
    return <TransactionCompletedWidget id={transaction?.id ?? ""} />;

  return (
    <Preloader />
  );
};

OffRamp.getLayout = function getLayout(page: ReactElement) {
  return (
    <WagmiWrapperLayout>
      <AuthMiddleware>
        {" "}
        <ConnectLayout>{page}</ConnectLayout>
      </AuthMiddleware>
    </WagmiWrapperLayout>
  );
};

export default OffRamp;
