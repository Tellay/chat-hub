import { IoMdCall } from 'react-icons/io'

export function ChatTopBar() {
  return (
    <div className="flex items-center justify-between border-b border-blue-700 bg-blue-800 px-7 py-4">
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8 rounded-full bg-blue-600">
          <div className="absolute bottom-0 right-0 grid h-3 w-3 place-items-center rounded-full bg-green-400 outline outline-4 outline-blue-800" />
        </div>
        <strong className="text-sm font-medium text-gray-300">d6stiny</strong>
      </div>

      <button>
        <IoMdCall className="h-5 w-5 text-gray-400 transition hover:text-white" />
      </button>
    </div>
  )
}
