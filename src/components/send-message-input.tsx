import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillEmojiWinkFill } from 'react-icons/bs'

export function SendMessageInput() {
  return (
    <div className="px-7 py-6">
      <div className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-3">
        <button className="group grid h-6 w-6 place-items-center rounded-full bg-blue-900">
          <AiOutlinePlus className="h-4 w-4 text-gray-400 transition group-hover:text-white" />
        </button>

        <input
          type="text"
          className="w-full bg-transparent text-sm font-medium text-white outline-none"
          placeholder="Message d6stiny..."
        />

        <button className="group">
          <BsFillEmojiWinkFill className="h-6 w-6 text-gray-400 transition group-hover:text-white" />
        </button>
      </div>
    </div>
  )
}
