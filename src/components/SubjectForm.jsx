import { useState } from 'react'

export default function SubjectForm({ onAdd }) {
  const [name, setName] = useState('')
  const [examDate, setExamDate] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !examDate) return

    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      examDate,
    })

    setName('')
    setExamDate('')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto text-left">
      <div>
        <label htmlFor="subject-name" className="block text-sm font-medium mb-1">
          Subject name
        </label>
        <input
          id="subject-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Biology"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="exam-date" className="block text-sm font-medium mb-1">
          Exam date
        </label>
        <input
          id="exam-date"
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          min={today}
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
      >
        Add subject
      </button>
    </form>
  )
}
