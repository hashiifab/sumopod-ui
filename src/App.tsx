import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

import Affiliate from "./pages/Affiliate";
import Ai from "./pages/Ai";
import BeliEmas from "./pages/BeliEmas";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Service";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import Templates from "./pages/Templates";

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
					<Route path="/dashboard/beli-emas" element={<BeliEmas />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
