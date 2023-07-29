import { ServerList } from '@/components/server-list'
import { UserChat } from '@/components/user-chat'
import { UserSidebar } from '@/components/user-sidebar'

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-[236px_auto] grid-rows-[90px_auto]">
      <div className="col-span-2">
        <ServerList />
      </div>

      <UserSidebar />

      <UserChat />
    </main>
  )
}
