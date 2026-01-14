import { useState } from "react";
import chip from "../assets/images/chip.png";
import signal from "../assets/images/signal.png";
import mastercard from "../assets/images/mastercard.png";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const Cards = () => {
  const [cards] = useState([
    {
      id: 1,
      name: "CodeItDown",
      number: "5000 0000 0000 0000",
      expiry: "12/05",
      image: mastercard,
      color: "bg-gradient-to-br from-[#1a1b4b] to-[#050622]",
    },
    {
      id: 2,
      name: "Personal",
      number: "5000 0000 0000 0000",
      expiry: "12/05",
      image: mastercard,
      color: "bg-gradient-to-br from-[#1b265f] to-[#141c5b]",
    },
  ]);

  return (
    <div
      className="
        w-full 
        grid 
        xl:grid-cols-3 
        md:grid-cols-2 
        grid-cols-1
        gap-6 
        2xl:gap-10 
      "
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className={`
            h-[210px] xl:h-[240px] 2xl:h-[260px]
            rounded-2xl 
            px-8 py-6 
            flex flex-col justify-between
            shadow-xl text-white relative overflow-hidden
            transition-all duration-300 hover:scale-[1.04]
            ${card.color}
          `}
        >
          {/* Top: Chip + Signal */}
          <div className="flex items-center gap-3">
            <img src={chip} className="w-12 xl:w-14" />
            <img src={signal} className="w-9 xl:w-10 opacity-80" />
          </div>

          {/* Card Number */}
          <div className="text-xl xl:text-2xl tracking-widest font-medium mt-2">
            {card.number}
          </div>

          {/* Expiry + Logo */}
          <div className="flex items-center justify-between mt-3">
            <div className="text-sm xl:text-base opacity-90">
              Exp: {card.expiry}
            </div>
            <img src={card.image} className="w-[65px] xl:w-[80px] opacity-90" />
          </div>

          {/* Card Holder */}
          <div className="absolute bottom-4 left-8 text-sm xl:text-base tracking-wide opacity-90">
            {card.name}
          </div>
        </div>
      ))}

      {/* Add New Card */}
      <div
        className="
          h-[210px] xl:h-[240px] 2xl:h-[260px] 
          border-2 border-dashed border-card-border 
          rounded-2xl flex flex-col 
          items-center justify-center gap-3 cursor-pointer 
          hover:border-primary hover:bg-gray-50
          transition-all
        "
      >
        <PlusCircleIcon className="w-10 h-10 text-card-border" />
        <span className="text-primary text-sm xl:text-base font-medium">
          Add New Card
        </span>
      </div>
    </div>
  );
};

export default Cards;
