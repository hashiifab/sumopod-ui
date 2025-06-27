import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
	return (
		<>
			<Header />

			{/* Hero Section */}
			<section className="flex flex-col justify-center items-center h-screen">
				<div className="text-center">
					<h1 className="text-8xl font-bold">
						<span className="text-blue-600">Deploy your App</span> <br /> in 15
						Seconds!
					</h1>
				</div>
				<div className="flex space-x-4 mt-8">
					<button
						type="button"
						className="bg-blue-600 text-white px-6 py-2 rounded-lg"
					>
						Get Started
					</button>
					<button
						type="button"
						className="bg-gray-200 text-black px-6 py-2 rounded-lg"
					>
						See App tempalate
					</button>
				</div>
			</section>

			{/* pricing Section */}
			<section className="flex flex-col justify-center items-center h-screen bg-slate-100 gap-6">
				<div className="text-center max-w-2xl">
					<h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
					<p className="text-xl font-medium">
						Get started with SumoPod today and experience the power of container
						management
					</p>
				</div>
				<div className="bg-white border-2 border-blue-500 w-[500px] h-[400px] rounded-lg flex flex-col justify-center items-center gap-4">
					<h2 className="text-2xl font-bold">Start Today</h2>
					<h1 className="text-4xl font-black text-blue-600"> FREE </h1>
					<p className="text-medium font-medium text-center">
						Get started with SumoPod today and experience the power of container
						management
					</p>
					<div className="flex flex-col justify-center items-center gap-4">
						<button
							type="button"
							className="bg-blue-600 text-white min-w-[400px] px-6 py-2 rounded-sm"
						>
							Get Started
						</button>
						<button
							type="button"
							className="bg-blue-600 text-white min-w-[400px] px-6 py-2 rounded-sm"
						>
							See App Template
						</button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="flex flex-col justify-center items-center h-screen bg-white gap-6">
				<div className="flex flex-col justify-center items-center gap-4 text-center max-w-2xl">
					<h1 className="text-4xl font-bold">
						Everything you need in one platform
					</h1>
					<p className="text-xl font-medium">
						SumoPod offers comprehensive solutions for container and application
						management
					</p>
				</div>

				<div className="flex flex-row justify-center items-center gap-4">
					<div className="flex flex-col justify-center items-center bg-white border border-black w-[400px] h-[300px] rounded-lg hover:shadow-lg">
						<div className="flex flex-col justify-start items-start gap-4 p-4">
							<div className="bg-blue-600 h-10 w-10 rounded-full"></div>
							<h2 className="text-2xl font-bold">Container Marketplace</h2>
							<p className="text-medium font-medium">
								Explore and purchase from our extensive container library, all
								verified and ready for instant deployment.
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center bg-white border border-black w-[400px] h-[300px] rounded-lg hover:shadow-lg">
						<div className="flex flex-col justify-start items-start gap-4 p-4">
							<div className="bg-blue-600 h-10 w-10 rounded-full"></div>
							<h2 className="text-2xl font-bold">Container Marketplace</h2>
							<p className="text-medium font-medium">
								Explore and purchase from our extensive container library, all
								verified and ready for instant deployment.
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center bg-white border border-black w-[400px] h-[300px] rounded-lg hover:shadow-lg">
						<div className="flex flex-col justify-start items-start gap-4 p-4">
							<div className="bg-blue-600 h-10 w-10 rounded-full"></div>
							<h2 className="text-2xl font-bold">Container Marketplace</h2>
							<p className="text-medium font-medium">
								Explore and purchase from our extensive container library, all
								verified and ready for instant deployment.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<div className="flex justify-center items-center mb-20">
				<div className="bg-blue-600 w-[90%] h-[300px] rounded-xl">
					<div className="flex flex-row items-center h-full gap-4 justify-around px-10">
						<div className="flex flex-col gap-4">
							<h1 className="text-2xl font-bold text-white">
								Ready to transform your container management?
							</h1>
							<p className="text-xl font-medium text-white">
								Join thousands of businesses using SumoPod to simplify their
								container and <br /> application infrastructure.
							</p>
						</div>
						<div className="flex flex-row gap-4">
							<button
								type="button"
								className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg"
							>
								See App Template
							</button>
							<button
								type="button"
								className="bg-white text-black px-7 py-3 rounded-lg"
							>
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Home;
