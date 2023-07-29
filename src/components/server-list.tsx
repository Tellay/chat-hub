import { ServerButton } from './server-button'
import { UserButton } from './user-button'

export function ServerList() {
  return (
    <div className="flex items-center gap-2 border-b border-blue-700 bg-blue-800 px-7 py-6">
      <UserButton />
      <hr className="h-6 border-2 border-blue-700" />
      {[1, 2, 3, 4, 5, 6].map((serverIdx) => (
        <ServerButton key={serverIdx} />
      ))}
    </div>
  )
}
