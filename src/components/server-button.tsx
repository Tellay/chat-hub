export function ServerButton() {
  return (
    <a
      className="relative h-10 w-10 rounded-[50%] bg-blue-600 transition-all hover:rounded-xl"
      href="#"
    >
      <div className="absolute bottom-0 right-0 grid h-4 w-fit place-items-center rounded-full bg-pink-500 px-0.5 text-[10px] font-bold outline outline-4 outline-blue-800">
        99+
      </div>
    </a>
  )
}
