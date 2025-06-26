import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

import Affiliate from "./pages/affiliate";
import Ai from "./pages/ai";
import Billing from "./pages/billing";
import Dashboard from "./pages/dashboard";
import BeliEmas from "./pages/Emas";
import Home from "./pages/Home";
import Login from "./pages/login";
import Services from "./pages/Service";
import Setting from "./pages/setting";
import Support from "./pages/support";
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
					<Route path="/dashboard/emas" element={<BeliEmas />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
