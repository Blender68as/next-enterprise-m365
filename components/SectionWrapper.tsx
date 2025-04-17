type SectionVariant = "full-bg" | "contained-bg" | "contained"

type SectionWrapperProps = {
  id?: string
  variant?: SectionVariant
  children: React.ReactNode
  outerClassName?: string
  innerClassName?: string
}

export default function SectionWrapper({
  id,
  variant = "contained",
  children,
  outerClassName = "",
  innerClassName = "",
}: SectionWrapperProps) {
  // Outer container (width/bg control)
  let sectionClass = "w-full"
  if (variant === "contained") {
    sectionClass += " shadow-none"
  }

  // Inner wrapper (centering and background)
  let containerClass = "max-w-[1200px] mx-auto p-5"

  if (variant === "contained-bg") {
    containerClass += " bg-white shadow-md rounded-md p-12"
  }

  return (
    <section id={id} className={`${sectionClass} ${outerClassName}`}>
      <div className={`${containerClass} ${innerClassName}`}>{children}</div>
    </section>
  )
}
