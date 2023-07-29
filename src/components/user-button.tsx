export function UserButton() {
  return (
    <a
      className="relative h-10 w-10 rounded-xl bg-blue-600 transition-all hover:rounded-[50%]"
      href="#"
    >
      <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-red-500 outline outline-4 outline-blue-800" />
    </a>
  )
}
