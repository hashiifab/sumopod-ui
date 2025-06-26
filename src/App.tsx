import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Ai from "./pages/Ai";
import Affiliate from "./pages/Affiliate";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import BeliEmas from "./pages/Emas";

import Services from "./pages/Service";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/login" element={<Login />}></Route>

        <Route element={<Dashboard />}>
          <Route path="/dashboard/services" element={<Services />}></Route>
          <Route path="/dashboard/billing" element={<Billing />}></Route>
          <Route path="/dashboard/ai" element={<Ai />}></Route>
          <Route path="/dashboard/affiliate" element={<Affiliate />} />
          <Route path="/dashboard/setting" element={<Setting />} />
          <Route path="/dashboard/support" element={<Support />} />
          <Route path="/dashboard/emas" element={<BeliEmas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
