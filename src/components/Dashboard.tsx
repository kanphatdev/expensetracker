import Cards from "./Cards";
import TransactionFiler from "./TransactionFiler";

const Dashboard = () => {
  return (
    <div
      className="
        w-full h-full 
        flex flex-col 
        xl:py-12 xl:px-14 
        2xl:py-16 2xl:px-20 
        p-6 
        gap-12 
        max-w-[1600px]
        mx-auto
      "
    >
      {/* Greeting */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary tracking-tight">
          Hey There, K 👋
        </h1>
        <p className="text-sm xl:text-base text-primary/80">
          We're here to help you manage your finance smartly.
        </p>
      </div>

      {/* Cards section */}
      <div className="w-full">
        <h2 className="text-lg xl:text-xl font-semibold text-primary mb-6 tracking-wide">
          Your Cards
        </h2>
        <Cards />
       
      </div>
       <span className="font-semibold text-primary mt-10 mb-2 capitalize">
            recent transaction
        </span>
        <TransactionFiler/>
    </div>
  );
};

export default Dashboard;
