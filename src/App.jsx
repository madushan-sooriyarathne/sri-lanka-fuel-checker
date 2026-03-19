import { useState } from 'react'
import NumberSelector from './NumberSelector'
import FuelStatus from './FuelStatus'
import './App.css'

function App() {
  const [selectedDigit, setSelectedDigit] = useState(null)

  const handleReset = () => {
    setSelectedDigit(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        <header className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">⛽ Fuel Quota Checker</h1>
          <p className="text-gray-600">Sri Lanka Fuel Availability</p>
        </header>

        {selectedDigit === null ? (
          <NumberSelector onSelect={setSelectedDigit} />
        ) : (
          <FuelStatus digit={selectedDigit} onReset={handleReset} />
        )}
      </div>
    </div>
  )
}

export default App
