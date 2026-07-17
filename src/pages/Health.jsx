import { useEffect, useState } from 'react'

function Health() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/health.json')
      .then((res) => res.json())
      .then(setData)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-2xl font-bold mb-4">Health Check</h1>

      {error && <p className="text-red-600">Failed to load: {error}</p>}

      {!data && !error && <p className="text-gray-500">Loading…</p>}

      {data && (
        <pre className="max-w-md rounded-lg bg-gray-900 text-green-400 text-sm p-4 overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default Health
