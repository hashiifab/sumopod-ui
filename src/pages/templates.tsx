import Header from "../components/Header";
import Footer from "../components/Footer";

function Templates() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center text-center gap-10 my-20">
        <div>
          <h1 className="text-3xl font-bold">Application Templates</h1>
          <p>
            Choose from our curated collection of application templates and
            deploy them in seconds
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-[600px]"
          />
          <div className="flex flex-row">
            <div className="bg-blue-500 text-white rounded-full py-2 px-4 ml-2">
              <p>All</p>
            </div>
            <div className="bg-blue-500 text-white rounded-full py-2 px-4 ml-2">
              <p>All</p>
            </div>
            <div className="bg-blue-500 text-white rounded-full py-2 px-4 ml-2">
              <p>All</p>
            </div>
            <div className="bg-blue-500 text-white rounded-full py-2 px-4 ml-2">
              <p>All</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="bg-white border-2 border-black rounded-lg p-4 w-[400px] h-[300px]"></div>
          <div className="bg-white border-2 border-black rounded-lg p-4 w-[400px] h-[300px]"></div>
          <div className="bg-white border-2 border-black rounded-lg p-4 w-[400px] h-[300px]"></div>
        </div>
        <div className="bg-white border-2 border-black rounded-lg p-4 w-[80%] h-[200px]"></div>
        
      </section>
      <Footer />
    </>
  );
}

export default Templates;
