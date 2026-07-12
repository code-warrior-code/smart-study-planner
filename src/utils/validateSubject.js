export const DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard']

export function isFutureDate(dateString, referenceDate = new Date()) {
  const exam = new Date(`${dateString}T00:00:00`)
  const today = new Date(referenceDate)
  today.setHours(0, 0, 0, 0)
  return exam > today
}

export function validateSubject({ name, examDate, difficulty }, referenceDate = new Date()) {
  const errors = {}

  const trimmedName = name?.trim() ?? ''
  if (!trimmedName) {
    errors.name = 'Subject name is required.'
  }

  if (!examDate) {
    errors.examDate = 'Exam date is required.'
  } else if (!isFutureDate(examDate, referenceDate)) {
    errors.examDate = 'Exam date must be a future date.'
  }

  if (!difficulty) {
    errors.difficulty = 'Difficulty level is required.'
  } else if (!DIFFICULTY_LEVELS.includes(difficulty)) {
    errors.difficulty = 'Please select a valid difficulty level.'
  }

  return errors
}

export function isSubjectValid(fields, referenceDate = new Date()) {
  return Object.keys(validateSubject(fields, referenceDate)).length === 0
}
