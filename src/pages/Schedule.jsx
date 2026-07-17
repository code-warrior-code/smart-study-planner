function Schedule() {
  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-2xl font-bold mb-2">Your Study Schedule</h1>
      <p className="text-gray-600 mb-6">
        Your AI-generated day-by-day plan will appear here once subjects are added.
      </p>

      <div className="max-w-md rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-400">
        No schedule generated yet.
      </div>
    </div>
  )
}

export default Schedule
