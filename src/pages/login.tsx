function Login() {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <div>
          <h1>Login</h1>
          <p></p>
        </div>
        <div>google</div>
        <div>or</div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" />
        </div>
        <button>Login</button>
        <p>
          Don't have an account? <a href="/">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
