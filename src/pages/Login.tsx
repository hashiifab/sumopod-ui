import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleSubmit = async () => {
    const isFormValid = email && password && (isSignup ? name : true);
    if (!isFormValid) return;

    setError('');

    // Hardcode backend URL to fix undefined issue
    const apiBaseUrl = 'https://wcwtnxxyerii.ap-southeast-1.clawcloudrun.com';
    const authUrl = `${apiBaseUrl}/api/auth/${isSignup ? 'sign-up' : 'sign-in'}/email`;
    const payload = isSignup ? { name, email, password } : { email, password };

    try {
      const res = await fetch(authUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include',
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle error response
        setError(data.message || 'An error occurred during authentication');
        return;
      }

      localStorage.setItem('user_email', data.user.email);
      localStorage.setItem('user_id', data.user.id);

      localStorage.setItem('session_token', data.token);
      navigate('/dashboard/services');
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white w-full max-w-md rounded-xl shadow p-8 flex flex-col gap-5 border">
          <h2 className="text-2xl font-bold text-center">
            {isSignup ? 'Create an Account' : 'Sign In'}
          </h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {isSignup && (
            <input
              type="text"
              placeholder="Name"
              className="border rounded px-4 py-2"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded px-4 py-2"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError('');
            }}
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>

          <p className="text-sm text-center">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => {
                setIsSignup(!isSignup);
                resetForm();
              }}
              className="text-blue-600 underline"
            >
              {isSignup ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
