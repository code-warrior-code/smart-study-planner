import { useState } from 'react'
import { DIFFICULTY_LEVELS, validateSubject } from '../utils/validateSubject'

const EMPTY_ERRORS = { name: '', examDate: '', difficulty: '' }

export default function SubjectForm({ onAdd }) {
  const [name, setName] = useState('')
  const [examDate, setExamDate] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [errors, setErrors] = useState(EMPTY_ERRORS)

  function handleSubmit(e) {
    e.preventDefault()

    const validationErrors = validateSubject({ name, examDate, difficulty })
    setErrors({ ...EMPTY_ERRORS, ...validationErrors })

    if (Object.keys(validationErrors).length > 0) return

    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      examDate,
      difficulty,
    })

    setName('')
    setExamDate('')
    setDifficulty('')
    setErrors(EMPTY_ERRORS)
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto text-left" noValidate>
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
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'subject-name-error' : undefined}
          className={`w-full rounded-lg border px-3 py-2 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p id="subject-name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
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
          min={minDate}
          aria-invalid={Boolean(errors.examDate)}
          aria-describedby={errors.examDate ? 'exam-date-error' : undefined}
          className={`w-full rounded-lg border px-3 py-2 ${
            errors.examDate ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.examDate && (
          <p id="exam-date-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.examDate}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="difficulty" className="block text-sm font-medium mb-1">
          Difficulty level
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          aria-invalid={Boolean(errors.difficulty)}
          aria-describedby={errors.difficulty ? 'difficulty-error' : undefined}
          className={`w-full rounded-lg border px-3 py-2 ${
            errors.difficulty ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select difficulty</option>
          {DIFFICULTY_LEVELS.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        {errors.difficulty && (
          <p id="difficulty-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.difficulty}
          </p>
        )}
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
