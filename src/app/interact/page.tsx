"use client";

import React from "react";
import TransactionForm from "../../components/TransactionForm"; // Import the form
import { provider } from '../../config/index'; // Import the provider

interface TransactionData {
  amount: string;
  recipient: `0x${string}`;
  message?: string;
}

const ParentComponent: React.FC = () => {

  // Handle the form submission data
  const handleFormSubmit = (data: TransactionData) => {
    console.log("Transaction Data Submitted:", data);
    // Perform additional logic like connecting to a blockchain or updating the UI
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-6">Transaction Dashboard</h1>
      <TransactionForm onSubmit={handleFormSubmit} provider={provider} />
    </div>
  );
};

export default ParentComponent;