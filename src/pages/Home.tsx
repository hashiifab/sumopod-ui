/** biome-ignore-all lint/nursery/useUniqueElementIds: <explanation> */
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />

      <section className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          <span className="text-blue-600">Deploy your App</span> <br /> in 15
          Seconds!
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Get Started
          </button>
          <button
            type="button"
            className="bg-gray-200 text-black px-6 py-2 rounded-lg"
          >
            See App Template
          </button>
        </div>
      </section>

      <section
        id="pricing"
        className="flex flex-col justify-center items-center min-h-screen bg-slate-100 px-4 gap-6 text-center"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl font-medium mt-2">
            Get started with SumoPod today and experience the power of container
            management
          </p>
        </div>
        <div className="bg-white border-2 border-blue-500 w-full max-w-md rounded-lg flex flex-col justify-center items-center gap-4 p-6">
          <h2 className="text-2xl font-bold">Start Today</h2>
          <h1 className="text-4xl font-black text-blue-600">FREE</h1>
          <p className="text-base font-medium text-center">
            Get started with SumoPod today and experience the power of container
            management
          </p>
          <div className="flex flex-col gap-4 w-full">
            <button
              type="button"
              className="bg-blue-600 text-white w-full px-6 py-2 rounded-sm"
            >
              Get Started
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white w-full px-6 py-2 rounded-sm"
            >
              See App Template
            </button>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="flex flex-col justify-center items-center min-h-screen bg-white gap-6 px-4 py-10"
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Everything you need in one platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium mt-2">
            SumoPod offers comprehensive solutions for container and application
            management
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 w-full">
          <div className="bg-white border border-black w-full sm:max-w-sm rounded-lg hover:shadow-lg p-4">
            <div className="flex flex-col gap-4">
              <div className="bg-blue-600 h-10 w-10 rounded-full"></div>
              <h2 className="text-xl font-bold">Container Marketplace</h2>
              <p className="text-base font-medium">
                Explore and purchase from our extensive container library, all
                verified and ready for instant deployment.
              </p>
            </div>
          </div>

          <div className="bg-white border border-black w-full sm:max-w-sm rounded-lg hover:shadow-lg p-4">
            <div className="flex flex-col gap-4">
              <div className="bg-blue-600 h-10 w-10 rounded-full"></div>
              <h2 className="text-xl font-bold">Deployment Automation</h2>
              <p className="text-base font-medium">
                Automate your deployment process with ease using our intuitive
                orchestration tools.
              </p>
            </div>
          </div>

          <div className="bg-white border border-black w-full sm:max-w-sm rounded-lg hover:shadow-lg p-4">
            <div className="flex flex-col gap-4">
              <div className="bg-blue-600 h-10 w-10 rounded-full"></div>
              <h2 className="text-xl font-bold">Real-Time Monitoring</h2>
              <p className="text-base font-medium">
                Gain full visibility into container performance with live
                metrics and alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center mb-20 px-4">
        <div className="bg-blue-600 w-full max-w-6xl rounded-xl py-10 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                Ready to transform your container management?
              </h1>
              <p className="text-sm sm:text-base md:text-xl font-medium text-white mt-2">
                Join thousands of businesses using SumoPod to simplify their
                container and application infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
              <button
                type="button"
                className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 rounded-lg whitespace-nowrap w-full sm:w-auto"
              >
                See App Template
              </button>
              <button
                type="button"
                className="bg-white text-black px-4 sm:px-7 py-2 sm:py-3 rounded-lg whitespace-nowrap w-full sm:w-auto"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
