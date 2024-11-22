import React, { useState, ChangeEvent, FormEvent } from "react";

interface TransactionData {
  amount: string;
  recipient: string;
  message?: string;
}

interface TransactionFormProps {
  onSubmit: (data: TransactionData) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || !recipient) {
      alert("Amount and Recipient are required!");
      return;
    }

    const transactionData: TransactionData = { amount, recipient, message };
    onSubmit(transactionData);

    // Reset fields after submission
    setAmount("");
    setRecipient("");
    setMessage("");
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-6 max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Submit Transaction</h2>

      <input
        type="text"
        placeholder="Enter Transaction Amount (ETH)"
        value={amount}
        onChange={handleInputChange(setAmount)}
        className="p-3 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Enter Recipient Address"
        value={recipient}
        onChange={handleInputChange(setRecipient)}
        className="p-3 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Enter a Message (optional)"
        value={message}
        onChange={handleInputChange(setMessage)}
        className="p-3 mb-6 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit Transaction
      </button>
    </form>
  );
};

export default TransactionForm;