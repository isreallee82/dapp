// pages/interact.tsx
"use client";

import React from "react";
import { useAppKitAccount } from '@reown/appkit/react'
import Link from "next/link";

const Interact: React.FC = () => {
  const { address, isConnected } = useAppKitAccount();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Interact with Smart Contract</h1>

      <p className="text-lg mb-4">
        Wallet Address: {isConnected ? address : "No wallet connected"}
      </p>

      {/* Form Component */}
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Transaction Amount"
          className="p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter Recipient Address"
          className="p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter a Message (optional)"
          className="p-2 mb-4 border rounded"
        />
        <button type="submit" onClick={() => console.log("submited")} className="px-4 py-2 text-white bg-blue-500 rounded">
          Submit Transaction
        </button>
      </form>

      <Link className="bg-gray-500 text-white p-2 rounded mt-4" href="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Interact;
