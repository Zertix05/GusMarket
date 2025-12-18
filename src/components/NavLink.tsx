type Props = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="text-sm text-green-900 hover:text-green-700 transition-colors"
    >
      {children}
    </a>
  )
}
