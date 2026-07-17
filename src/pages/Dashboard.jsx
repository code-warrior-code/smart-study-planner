function Dashboard() {
  const stats = [
    { label: 'Subjects', value: 0 },
    { label: 'Days completed', value: 0 },
    { label: 'Days missed', value: 0 },
    { label: 'Upcoming deadline', value: '—' },
  ]

  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-2xl font-bold mb-2">Progress Dashboard</h1>
      <p className="text-gray-600 mb-6">
        A snapshot of your study progress and upcoming deadlines.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-gray-200 p-4 text-center"
          >
            <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
