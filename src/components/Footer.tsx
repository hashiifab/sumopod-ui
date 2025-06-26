import React from "react";

function Footer() {
	return (
		<div className="bg-black">
			<div className="flex justify-around p-20 border-b border-gray-700">
				<div>
					<h1 className="text-white text-2xl font-bold">Sumopod</h1>
					<p className="text-white text-medium max-w-[300px]">
						SumoPod offers seamless container and application purchasing
						solutions for businesses of all sizes.
					</p>
				</div>
				<div className="flex flex-row gap-52">
					<div>
						<h1 className="text-white text-xl font-bold">Quick Links</h1>
						<ul>
							<a href="/">
								<li className="text-white text-medium">Home</li>
							</a>
							<a href="/">
								<li className="text-white text-medium">Get Started</li>
							</a>
							<a href="/">
								<li className="text-white text-medium">Login</li>
							</a>
						</ul>
					</div>
					<div>
						<h1 className="text-white text-xl font-bold">Quick Links</h1>
						<ul>
							<a href="/">
								<li className="text-white text-medium">Home</li>
							</a>
							<a href="/">
								<li className="text-white text-medium">Get Started</li>
							</a>
							<a href="/">
								<li className="text-white text-medium">Login</li>
							</a>
						</ul>
					</div>
					<div>
						<h1 className="text-white text-xl font-bold">Quick Links</h1>
						<ul>
							<a href="/">
								<li className="text-white text-medium">Home</li>
							</a>
							<a href="/">
								<li className="text-white text-medium">Get Started</li>
							</a>
							<a href="/">
								<li className="text-white text-medium">Login</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<p className="text-white text-center p-10">
					© 2025 KodingWorks - PT Koding Kreasi Indonesia. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer;
