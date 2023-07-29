import { Chat } from './chat'
import { ChatTopBar } from './chat-topbar'
import { SendMessageInput } from './send-message-input'

export function UserChat() {
  return (
    <section className="flex h-full flex-col">
      <ChatTopBar />

      <Chat />

      <SendMessageInput />
    </section>
  )
}
