// app/interact.tsx
"use client";

import React, { useState } from "react";
import { useAppKitAccount } from '@reown/appkit/react';
import Link from "next/link";
import TransactionForm from "@/components/TransactionForm";  // Import TransactionForm

const Interact: React.FC = () => {
  const { address, isConnected } = useAppKitAccount();
  const [transactionDetails, setTransactionDetails] = useState<{
    amount: string;
    recipient: string;
    message?: string;
  } | null>(null);

  const handleTransactionSubmit = (transactionData: {
    amount: string;
    recipient: string;
    message?: string;
  }) => {
    setTransactionDetails(transactionData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Interact with Smart Contract</h1>

      <p className="text-lg mb-4">
        Wallet Address: {isConnected ? address : "No wallet connected"}
      </p>

      {/* TransactionForm component to handle form submission */}
      <TransactionForm onSubmit={handleTransactionSubmit} />

      {transactionDetails && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Transaction Details:</h2>
          <p>Amount: {transactionDetails.amount} ETH</p>
          <p>Recipient: {transactionDetails.recipient}</p>
          <p>Message: {transactionDetails.message || "No message"}</p>
        </div>
      )}

      <Link className="bg-gray-500 text-white p-2 rounded mt-4" href="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Interact;
