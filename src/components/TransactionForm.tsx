"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { isAddress } from "ethers"; // For address validation
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

interface TransactionData {
  amount: string;
  recipient: `0x${string}`;
  message?: string;
}

interface TransactionFormProps {
  onSubmit: (data: TransactionData) => void;
  provider: WagmiAdapter;
}
type SendTransactionResult = {
  hash: string;
};

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit, provider }) => {
  const { address, isConnected } = useAppKitAccount()
  const [amount, setAmount] = useState<string>("");
  const [gasPrice, setGasPrice] = useState<number | bigint>(0);
  const [recipient, setRecipient] = useState<`0x${string}`>(`0x${""}`);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [transactionResult, setTransactionResult] = useState<SendTransactionResult | null>(null);

  const { caipNetwork  } = useAppKitNetwork()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!amount || !recipient) {
      alert("Amount and Recipient are required!");
      return;
    }

    if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      alert("Please enter a valid transaction amount.");
      return;
    }

    if (!isAddress(recipient)) {
      alert("Invalid recipient address.");
      return;
    }

    const transactionData: TransactionData = { amount, recipient, message };
    onSubmit(transactionData);

    try {
      setIsLoading(true);
      if (!caipNetwork) {
        alert("Network is not defined. Please connect to a network.");
        return;
      }

      const gas = await provider.estimateGas({
        address: recipient,
        to: recipient,
        caipNetwork: caipNetwork, // Use the connected network
        data: message ? `0x${Buffer.from(message, "utf8").toString("hex")}` : "",
      });
      setGasPrice(gas.gas);
      const params = {
        address: recipient,
        to: recipient,
        value: BigInt(parseFloat(amount) * 10 ** 18),
        data: message ? `0x${Buffer.from(message, "utf8").toString("hex")}` : "",
        gasPrice: gasPrice,
      };

      const providerInstance = await provider;

      if (!providerInstance) {
        alert("No provider found. Please connect a wallet.");
        return;
      }
      const result = await providerInstance.sendTransaction(params);

      setTransactionResult(result);
      alert("Transaction submitted successfully!");
    } catch (error: unknown) {
      console.error("Transaction error:", error);
      if (error instanceof Error) {
        alert(`Failed to send transaction: ${error.message}`);
      } else {
        alert("Failed to send transaction: Unknown error");
      }
    } finally {
      setIsLoading(false);
      setAmount("");
      setRecipient(`0x${""}`);
      setMessage("");
    }
  };

  const handleInputChange = <T extends string>(
    setter: React.Dispatch<React.SetStateAction<T>>
  ) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value as T);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-lg w-full p-6 bg-gradient-to-r from-blue-100 to-blue-50 shadow-xl rounded-lg"
      >
        {isConnected ? (
          <h5 className="text-md font-semibold mb-4 text-center text-blue-600">Connected with address: {address}</h5>
        ) : (<></>)
        }
        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Submit Transaction
        </h3>

        <input
          type="text"
          placeholder="Enter Transaction Amount (ETH)"
          value={amount}
          onChange={handleInputChange(setAmount)}
          className="p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
        <input
          type="text"
          placeholder="Enter Recipient Address"
          value={recipient}
          onChange={handleInputChange(setRecipient)}
          className="p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
        <input
          type="text"
          placeholder="Enter a Message (optional)"
          value={message}
          onChange={handleInputChange(setMessage)}
          className="p-3 mb-6 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit Transaction"}
        </button>

        {transactionResult && (
          <p className="mt-4 text-center text-green-600">
            Transaction successful!{" "}
            <a
              href={`https://etherscan.io/tx/${transactionResult.hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on Etherscan
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default TransactionForm;