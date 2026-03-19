export default function NumberSelector({ onSelect }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">What's the last digit of your vehicle?</h2>
      <p className="text-gray-500 text-center mb-8">Select your vehicle's last license plate digit</p>

      <div className="grid grid-cols-5 gap-3 sm:gap-4">
        {numbers.map((num) => (
          <button
            key={num}
            onClick={() => onSelect(num)}
            className="aspect-square text-2xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {num}
          </button>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <p className="text-sm text-blue-700 text-center">
          <span className="font-semibold">📋 How it works:</span><br />
          Even digits → Can fuel on even days<br />
          Odd digits → Can fuel on odd days
        </p>
      </div>
    </div>
  )
}
