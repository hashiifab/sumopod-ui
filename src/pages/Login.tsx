import Footer from "../components/Footer";
import Header from "../components/Header";
import { supabase } from "../supabase";

function Login() {
  const loginGoogle = async () => {
    const isProduction =
      import.meta.env.PROD ||
      window.location.hostname === "cloone-sumopod.netlify.app";
    const baseUrl = isProduction
      ? "https://cloone-sumopod.netlify.app"
      : window.location.origin;

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${baseUrl}/dashboard/services`,
      },
    });
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 md:p-10 flex flex-col gap-6 border border-gray-200">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Welcome back
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Sign in to your account to continue
            </p>
          </div>

          <button
            type="button"
            onClick={loginGoogle}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-200"
          >
            Sign in with Google
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
