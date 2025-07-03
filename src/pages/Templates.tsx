import Footer from "../components/Footer";
import Header from "../components/Header";

function Templates() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center text-center gap-10 my-20 px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">
            Application Templates
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            Choose from our curated collection of application templates and
            deploy them in seconds
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-3xl">
          <input
            type="text"
            placeholder="Search templates..."
            className="border border-gray-300 rounded-md p-3 w-full"
          />

          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-blue-500 text-white rounded-full py-2 px-4">
              <p>All</p>
            </div>
            <div className="bg-blue-500 text-white rounded-full py-2 px-4">
              <p>Business</p>
            </div>
            <div className="bg-blue-500 text-white rounded-full py-2 px-4">
              <p>Productivity</p>
            </div>
            <div className="bg-blue-500 text-white rounded-full py-2 px-4">
              <p>Communication</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-2 w-full max-w-6xl">
          <div className="bg-white border-2 border-black rounded-lg p-4 w-full sm:w-[300px] h-[300px]"></div>
          <div className="bg-white border-2 border-black rounded-lg p-4 w-full sm:w-[300px] h-[300px]"></div>
          <div className="bg-white border-2 border-black rounded-lg p-4 w-full sm:w-[300px] h-[300px]"></div>
        </div>

        <div className="bg-white border-2 border-black rounded-lg p-4 w-full max-w-6xl h-[200px] mt-10"></div>
      </section>
      <Footer />
    </>
  );
}

export default Templates;
