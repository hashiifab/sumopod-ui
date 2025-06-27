import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function DashboardHeader() {
	const [email, setEmail] = useState<string | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			const userEmail = data.session?.user?.email ?? null;
			setEmail(userEmail);

			if (!userEmail) navigate("/");
		});
	}, [navigate]);

	const handleLogout = async () => {
		await supabase.auth.signOut();
		navigate("/");
	};

	return (
		<header className="flex justify-between pr-10 h-16 bg-white border-b border-gray-200 sticky top-0 z-20">
			<div className="text-2xl font-bold flex items-center ml-10">SUmopod</div>
			<div className="flex gap-4 items-center">
				<div className="w-10 h-10 rounded-full bg-blue-500" />
				<div>
					<h3>User</h3>
					<p>{email ?? "Loading..."}</p>
					<button
						type="button"
						className="text-sm text-red-500 mt-1"
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			</div>
		</header>
	);
}

export default DashboardHeader;
