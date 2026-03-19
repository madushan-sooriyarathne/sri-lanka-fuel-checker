interface EligibleDay {
	date: Date;
	dayName: string;
	dateStr: string;
}

interface EligibleDatesResult {
	todayEligible: boolean;
	todayEligibleInfo: EligibleDay | null;
	nextThree: EligibleDay[];
}

interface FuelStatusProps {
	digit: number;
	onReset: () => void;
}

function getEligibleDates(digit: number): EligibleDatesResult {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const isEven = digit % 2 === 0;
	const todayEligible = isEven
		? today.getDate() % 2 === 0
		: today.getDate() % 2 === 1;

	const upcomingDays: EligibleDay[] = [];
	const searchDate = new Date(today);

	if (!todayEligible) {
		// If today is not eligible, find next eligible day
		searchDate.setDate(today.getDate() + 1);
	}

	while (upcomingDays.length < 4) {
		const day = searchDate.getDate();
		const isEligible = isEven ? day % 2 === 0 : day % 2 === 1;

		if (isEligible) {
			upcomingDays.push({
				date: new Date(searchDate),
				dayName: searchDate.toLocaleDateString("en-US", { weekday: "long" }),
				dateStr: searchDate.toLocaleDateString("en-GB", {
					day: "numeric",
					month: "short",
					year: "numeric",
				}),
			});
		}

		searchDate.setDate(searchDate.getDate() + 1);
	}

	const todayEligibleInfo = upcomingDays[0];
	const nextThree = upcomingDays.slice(1, 4);

	return {
		todayEligible,
		todayEligibleInfo,
		nextThree,
	};
}

export default function FuelStatus({ digit, onReset }: FuelStatusProps) {
	const { todayEligible, todayEligibleInfo, nextThree } =
		getEligibleDates(digit);

	return (
		<div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
			<div className="text-center mb-6">
				<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-4xl font-bold shadow-lg mb-4">
					{digit}
				</div>
				<p className="text-gray-500">Vehicle last digit</p>
			</div>

			{/* Today's Status */}
			<div
				className={`p-6 rounded-xl mb-6 ${todayEligible ? "bg-green-50 border-2 border-green-200" : "bg-red-50 border-2 border-red-200"}`}
			>
				<h3
					className={`text-xl font-bold mb-2 ${todayEligible ? "text-green-700" : "text-red-700"}`}
				>
					{todayEligible
						? "✅ You CAN fuel today!"
						: "❌ You CANNOT fuel today"}
				</h3>
				<p
					className={`text-sm ${todayEligible ? "text-green-600" : "text-red-600"}`}
				>
					{todayEligibleInfo
						? `Today: ${todayEligibleInfo.dayName}, ${todayEligibleInfo.dateStr}`
						: "Check next eligible date below"}
				</p>
			</div>

			{/* Next Eligible Days */}
			<div className="mb-8">
				<h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
					<span className="mr-2">📅</span>
					Next Eligible Days
				</h4>
				<div className="space-y-3">
					{nextThree.map((day: EligibleDay, index: number) => (
						<div
							key={day.dateStr}
							className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors"
						>
							<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600 font-bold text-lg mr-4">
								{index + 1}
							</div>
							<div className="flex-grow">
								<p className="font-semibold text-gray-800">{day.dayName}</p>
								<p className="text-sm text-gray-500">{day.dateStr}</p>
							</div>
							<div className="flex-shrink-0">
								<span className="text-2xl">⛽</span>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Reset Button */}
			<button
				type="button"
				onClick={onReset}
				className="w-full py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
			>
				🔁 Change Vehicle Digit
			</button>
		</div>
	);
}
