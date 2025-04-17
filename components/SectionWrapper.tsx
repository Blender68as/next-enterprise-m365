type SectionWrapperProps = {
  width?: "full" | "normal"
  children: React.ReactNode
  id?: string
  outerClassName?: string // z. B. für bg, padding
  innerClassName?: string // z. B. für Textfarben, Abstände
}

export default function SectionWrapper({
  width = "normal",
  children,
  id,
  outerClassName = "",
  innerClassName = "",
}: SectionWrapperProps) {
  // immer max-width für Inhalt
  const innerContainer = "max-w-[1200px] mx-auto px-4"

  return (
    <section id={id} className={width === "full" ? `w-full ${outerClassName}` : outerClassName}>
      <div className={`${innerContainer} ${innerClassName}`}>{children}</div>
    </section>
  )
}
