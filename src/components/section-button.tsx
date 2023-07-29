interface SectionButtonProps {
  title: string
  icon: React.ReactNode
}

export function SectionButton({ title, icon }: SectionButtonProps) {
  return (
    <a
      className="flex items-center gap-2 rounded-md px-2 py-1.5 font-open-sans text-sm font-semibold text-gray-400 transition hover:bg-blue-500"
      href="#"
    >
      {icon}
      {title}
    </a>
  )
}
