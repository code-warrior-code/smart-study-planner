import { useState } from 'react'
import SubjectForm from '../components/SubjectForm'
import SubjectCard from '../components/SubjectCard'

function Home() {
  const [subjects, setSubjects] = useState([])

  function handleAddSubject(subject) {
    setSubjects((prev) => [...prev, subject])
  }

  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-2">Smart Study Planner</h1>
      <p className="mb-8 text-gray-600">Add your subjects and exam dates to get started.</p>

      <SubjectForm onAdd={handleAddSubject} />

      {subjects.length > 0 && (
        <ul className="mt-8 max-w-md mx-auto text-left space-y-2">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              name={subject.name}
              examDate={subject.examDate}
              difficulty={subject.difficulty}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home
