"use client"

import { useEffect, useState } from "react"

type SafeEmailProps = {
  user: string
  domain: string
  label?: string
}

export default function SafeEmail({ user, domain, label }: SafeEmailProps) {
  const [email, setEmail] = useState("")

  useEffect(() => {
    setEmail(`${user}@${domain}`)
  }, [user, domain])

  return (
    <a href={`mailto:${email}`} className="text-blue-600 underline">
      {label ?? email}
    </a>
  )
}
