import { UserProps } from '@/types'

import { RiCloseFill } from 'react-icons/ri'

interface UserChatButtonProps {
  user: UserProps
}

export function UserChatButton({ user }: UserChatButtonProps) {
  return (
    <a
      className="group relative flex items-center gap-2 rounded-md px-2 py-1.5 font-open-sans transition-all hover:bg-blue-500"
      href="#"
    >
      <div className="relative h-8 w-8 rounded-full bg-blue-600">
        <div
          className={`absolute bottom-0 right-0 grid h-3 w-3 place-items-center rounded-full ${
            user.status === 'online'
              ? 'bg-green-400'
              : user.status === 'dnd'
              ? 'bg-red-500'
              : user.status === 'idle'
              ? 'bg-yellow-200'
              : 'bg-gray-500'
          } outline outline-4 outline-blue-800`}
        />
      </div>
      <div className="grid">
        <strong className="text-sm font-semibold text-gray-400">
          {user.username}
        </strong>
        <span className="text-[11px] font-semibold text-white">
          {user.status === 'online' && 'Online'}
          {user.status === 'dnd' && 'Do Not Disturb'}
          {user.status === 'idle' && 'Idle'}
          {user.status === 'offline' && 'Offline'}
        </span>
      </div>

      <RiCloseFill className="absolute right-2 z-10 hidden h-5 w-5 text-gray-400 transition hover:text-white group-hover:block" />
    </a>
  )
}
