export default function SubjectCard({ name, examDate }) {
  return (
    <li className="rounded-lg border border-gray-200 p-3">
      <strong className="text-gray-900">{name}</strong>
      <span className="block text-sm text-gray-500 mt-1">
        Exam: {new Date(examDate).toLocaleDateString()}
      </span>
    </li>
  )
}
