/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/nursery/useUniqueElementIds: <explanation> */
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
            Login dengan Google
          </button>
          <div className="text-center mt-4">or continue with email</div>
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="email">Email Address</label>
            <input className="border border-black rounded-lg p-2 w-full" />
          </div>
          <p className="mt-4 text-center">
            Don't have an account? <a href="/">Register</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
