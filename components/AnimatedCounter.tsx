"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      {/* npm install react-countup Check the react countup page to get more props */}
      <CountUp decimals={2} decimal="," prefix="CAD$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
