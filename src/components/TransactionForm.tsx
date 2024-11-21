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
    <form onSubmit={handleSubmit} className="flex flex-col mt-4">
      <input
        type="text"
        placeholder="Enter Transaction Amount"
        value={amount}
        onChange={handleInputChange(setAmount)}
        className="p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="Enter Recipient Address"
        value={recipient}
        onChange={handleInputChange(setRecipient)}
        className="p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="Enter a Message (optional)"
        value={message}
        onChange={handleInputChange(setMessage)}
        className="p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Submit Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
