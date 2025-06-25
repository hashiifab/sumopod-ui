import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] flex flex-col gap-4 border border-black">
          <div className="text-center pb-4">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm">Sign in to your account to continue</p>
          </div>
          <div className="bg-white text-center py-2 w-[98%] rounded-lg border border-black">
            google account
          </div>
          <div className="text-center">or continue with email</div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">email Address</label>
            <input
              className="border border-black rounded-lg p-2 w-[98%]"
              type="email"
            />
          </div>
          <Link to="/dashboard">
            <button className="bg-blue-500 text-white p-2 rounded-lg w-[98%]">
              send verification code
            </button>
          </Link>
          <p>
            Don't have an account? <a href="/">Register</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
