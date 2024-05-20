// import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "La" };
  return (
    <section className="home">
      <div className="home -content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
      </div>

      <TotalBalanceBox
        accounts={[]}
        totalBanks={[1]}
        totalCurrentBalance={[1250.56]}
      />
    </section>
  );
};

export default Home;
