import { SectionButton } from './section-button'
import { PiHouseFill, PiUsersFill, PiInfoFill } from 'react-icons/pi'
import { UserChatButton } from './user-chat-button'
import { UserProps } from '@/types'

export function UserSidebar() {
  const NavLinks = [
    {
      title: 'Home',
      icon: <PiHouseFill className="h-5 w-5" />,
    },

    {
      title: 'Friends',
      icon: <PiUsersFill className="h-5 w-5" />,
    },

    {
      title: 'About Us',
      icon: <PiInfoFill className="h-5 w-5" />,
    },
  ]

  const Users: UserProps[] = [
    {
      username: 'd6stiny',
      status: 'online',
    },

    {
      username: 'neru',
      status: 'idle',
    },

    {
      username: 'PEDROJ3',
      status: 'offline',
    },

    {
      username: 'Ronaldo',
      status: 'dnd',
    },
  ]

  return (
    <aside className="h-full w-full border-r border-blue-700 bg-blue-800 px-7 py-4">
      <strong className="font-open-sans text-sm text-gray-400">
        Direct Messages
      </strong>

      <nav className="grid gap-1 border-b border-blue-700 py-4">
        {NavLinks.map((navLink) => (
          <SectionButton key={navLink.title} {...navLink} />
        ))}
      </nav>

      <nav className="grid gap-1 py-4">
        {Users.map((user) => (
          <UserChatButton key={user.username} user={user} />
        ))}
      </nav>
    </aside>
  )
}
