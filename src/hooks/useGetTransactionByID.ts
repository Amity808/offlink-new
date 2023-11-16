import { useEffect, useState } from "react";
import useLoading from "./useLoading";
import { Transaction } from "@/types";
import { getTransactionById } from "@/helpers/transaction";
import { db } from "@/dexie/config";

const useGetTransactionByID = (id: string) => {
  const [transaction, setTransaction] = useState<Transaction | undefined>();
  const { isLoading, startLoading, stopLoading } = useLoading(true);

  useEffect(() => {
    startLoading();
    const _getTransanctionById = async () => {
      const transactionId = await db.transactions
        .where("id")
        .equals(id)
        .first();
        console.log(transactionId)

        // if(transactionId) {
        //   setTransaction(transaction)
        //   return
        // }

      // TODO: rewrite smart contract to return orderID
      // PENDING, OPENED, ACCEPTED, COMPLETED, RELEASE, CANCELLED, REFUNDED

      const _transaction = await getTransactionById(id);
      console.log(_transaction)

      setTransaction(_transaction);
  
      stopLoading();
    };

    _getTransanctionById();
  }, []);
  return { isLoading, transaction };
};

export default useGetTransactionByID;
