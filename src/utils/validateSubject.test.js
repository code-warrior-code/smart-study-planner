import { describe, expect, it } from 'vitest'
import {
  DIFFICULTY_LEVELS,
  isFutureDate,
  isSubjectValid,
  validateSubject,
} from './validateSubject'

const referenceDate = new Date('2026-07-12T12:00:00')

describe('validateSubject', () => {
  it('returns no errors for valid input', () => {
    const errors = validateSubject(
      { name: 'Biology', examDate: '2026-08-01', difficulty: 'Medium' },
      referenceDate,
    )

    expect(errors).toEqual({})
    expect(isSubjectValid({ name: 'Biology', examDate: '2026-08-01', difficulty: 'Medium' }, referenceDate)).toBe(true)
  })

  it('requires a non-empty subject name', () => {
    expect(validateSubject({ name: '', examDate: '2026-08-01', difficulty: 'Easy' }, referenceDate)).toEqual({
      name: 'Subject name is required.',
    })
    expect(validateSubject({ name: '   ', examDate: '2026-08-01', difficulty: 'Easy' }, referenceDate)).toEqual({
      name: 'Subject name is required.',
    })
  })

  it('requires an exam date', () => {
    expect(validateSubject({ name: 'Biology', examDate: '', difficulty: 'Easy' }, referenceDate)).toEqual({
      examDate: 'Exam date is required.',
    })
  })

  it('requires exam date to be in the future', () => {
    expect(validateSubject({ name: 'Biology', examDate: '2026-07-12', difficulty: 'Easy' }, referenceDate)).toEqual({
      examDate: 'Exam date must be a future date.',
    })
    expect(validateSubject({ name: 'Biology', examDate: '2026-07-10', difficulty: 'Easy' }, referenceDate)).toEqual({
      examDate: 'Exam date must be a future date.',
    })
  })

  it('requires a difficulty level', () => {
    expect(validateSubject({ name: 'Biology', examDate: '2026-08-01', difficulty: '' }, referenceDate)).toEqual({
      difficulty: 'Difficulty level is required.',
    })
  })

  it('rejects invalid difficulty values', () => {
    expect(validateSubject({ name: 'Biology', examDate: '2026-08-01', difficulty: 'Expert' }, referenceDate)).toEqual({
      difficulty: 'Please select a valid difficulty level.',
    })
  })

  it('returns multiple errors when several fields are invalid', () => {
    const errors = validateSubject({ name: '', examDate: '', difficulty: '' }, referenceDate)

    expect(errors).toEqual({
      name: 'Subject name is required.',
      examDate: 'Exam date is required.',
      difficulty: 'Difficulty level is required.',
    })
  })
})

describe('isFutureDate', () => {
  it('returns true only for dates after the reference day', () => {
    expect(isFutureDate('2026-07-13', referenceDate)).toBe(true)
    expect(isFutureDate('2026-07-12', referenceDate)).toBe(false)
    expect(isFutureDate('2026-07-11', referenceDate)).toBe(false)
  })
})

describe('DIFFICULTY_LEVELS', () => {
  it('includes Easy, Medium, and Hard', () => {
    expect(DIFFICULTY_LEVELS).toEqual(['Easy', 'Medium', 'Hard'])
  })
})
