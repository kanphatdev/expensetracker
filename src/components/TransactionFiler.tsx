import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
}

interface TransactionProps {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  originalTransactions: Transaction[];
  setOriginalTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const TransactionFiler = ({
  transactions,
  setTransactions,
  originalTransactions,
}: TransactionProps) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim().length > 0) {
      const filtered = transactions.filter((transaction) =>
        transaction.title.toLowerCase().includes(value.toLowerCase())
      );
      setTransactions(filtered);
    } else {
      // คืนค่าทั้งหมดเมื่อช่อง search ว่าง
      setTransactions(originalTransactions);
    }
  };
  const handleAddtransaction = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="w-full flex items-center justify-between my-2">
        <div className="xl:w-[300px] w-[170px] h-[40px] border border-search-border/60 rounded-lg flex items-center gap-3 px-2">
          <MagnifyingGlassIcon className="text-search-border h-5 w-5" />
          <input
            type="text"
            placeholder="Search"
            className=" w-full h-full outline-none bg-transparent text-sm placeholder:text-card-border text-primary"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <button onClick={handleAddtransaction} className="h-[40px] bg-primaryButton text-white rounded-lg flex items-center gap-2 justify-center cursor-pointer px-2">
          <PlusCircleIcon className="w-5 h-5 text-white"/> add Transaction
        </button>
      </div>
    </>
  );
};

export default TransactionFiler;
