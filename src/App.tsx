import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Templates from "./pages/templates";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Billing from "./pages/billing";
import Ai from "./pages/ai";
import Affiliate from "./pages/affiliate";
import Setting from "./pages/setting";
import Support from "./pages/support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/billing" element={<Billing />}></Route>
        <Route path="/ai" element={<Ai />}></Route>
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
