const Footer = () => {
	return (
		<footer className="border-t border-gray-200/50 bg-gray-50/50 backdrop-blur-sm">
			<div className="max-w-md mx-auto py-6 px-4">
				<p className="text-center text-sm text-gray-600">
					Developed by{" "}
					<a
						href="https://www.facebook.com/indrajith.yapa.2025"
						target="_blank"
						rel="noopener noreferrer"
						className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 font-medium"
					>
						Indrajith Yapa
					</a>{" "}
					with ❤️
				</p>
			</div>
		</footer>
	);
};

export default Footer;
