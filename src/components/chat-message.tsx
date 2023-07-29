import { MessageProps } from '@/types'

export function ChatMessage({ author, sentAt, messages }: MessageProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 shrink-0 rounded-full bg-blue-600" />

      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <strong className="text-sm font-semibold text-gray-400">
            {author}
          </strong>
          <time className="text-[10px] text-gray-600">{sentAt}</time>
        </div>

        {messages.map((message) => (
          <p key={message} className="-mt-0.5 text-sm">
            {message}
          </p>
        ))}
      </div>
    </div>
  )
}
