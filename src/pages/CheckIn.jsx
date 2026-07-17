function CheckIn() {
  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-2xl font-bold mb-2">Daily Check-in</h1>
      <p className="text-gray-600 mb-6">
        Mark whether today's target was completed. Missed targets trigger an
        automatic re-plan of the remaining days.
      </p>

      <div className="max-w-md rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-400">
        No target set for today yet.
      </div>
    </div>
  )
}

export default CheckIn
