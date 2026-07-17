import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/check-in', label: 'Check-in' },
  { to: '/dashboard', label: 'Dashboard' },
]

function Nav() {
  return (
    <nav className="border-b border-gray-200 mb-8">
      <ul className="flex flex-wrap gap-4 sm:gap-6 px-4 sm:px-8 py-4 text-sm font-medium">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                  : 'text-gray-500 hover:text-gray-800 pb-1'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
