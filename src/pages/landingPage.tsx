import React from "react";
import Header from "../components/Header";

function LandingPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="text-center">
          <h1 className="text-8xl font-bold">
            <span className="text-blue-600">Deploy your App</span> <br /> in 15
            Seconds!
          </h1>
        </div>
        <div className="flex space-x-4 mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Get Started
          </button>
          <button className="bg-gray-200 text-black px-6 py-2 rounded-lg">
            See App tempalate
          </button>
        </div>
      </section>

      {/* pricing Section */}
      <section className="flex flex-col justify-center items-center h-screen bg-slate-100 gap-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-xl font-medium">
            Get started with SumoPod today and experience the power of container
            management
          </p>
        </div>
        <div className="bg-white border-2 border-blue-500 w-[500px] h-[400px] rounded-lg flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl font-bold">Start Today</h2>
          <h1 className="text-4xl font-black text-blue-600"> FREE </h1>
          <p className="text-medium font-medium text-center">
            Get started with SumoPod today and experience the power of container
            management
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <button className="bg-blue-600 text-white min-w-[400px] px-6 py-2 rounded-sm">
              Get Started
            </button>
            <button className="bg-blue-600 text-white min-w-[400px] px-6 py-2 rounded-sm">
              See App Template
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
