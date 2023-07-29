import { MessageProps } from '@/types'
import { ChatMessage } from './chat-message'

export function Chat() {
  const Messages: MessageProps[] = [
    {
      author: 'Tellay ⚡',
      sentAt: '11/06/2023 00:55',
      messages: ['Hello, how are you?', 'Monday do you want to go out?'],
    },

    {
      author: 'd6stiny',
      sentAt: '11/06/2023 00:58',
      messages: [
        'I am fine and you?',
        'Of course I want to go out! Where do you want to go? Maybe Central Tejo in Belém? ',
      ],
    },
  ]

  return (
    <div className="flex flex-1 flex-col px-7 py-6">
      <div className="flex flex-col space-y-3">
        <strong className="text-[23px] font-semibold text-gray-400">
          @d6stiny
        </strong>
        <span className="text-sm">This is the start of this conversation</span>
      </div>

      <div className="mt-9 grid gap-4">
        {Messages.map((message) => (
          <ChatMessage key={message.sentAt} {...message} />
        ))}
      </div>
    </div>
  )
}
