"use client"

import { useState } from "react"
import SectionWrapper from "./SectionWrapper"
import { Button, Spinner } from "@radix-ui/themes"
import { Form } from "radix-ui"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    institution: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", telefon: "", institution: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <div id="beforeContact" style={{ scrollMarginTop: 90 }}></div>
      <SectionWrapper id="contact" variant="contained-bg">
        <h2 className="section-title">Kontakt</h2>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ihr Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Ihre E-Mail"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Ihre Telefonnummer"
              value={formData.telefon}
              onChange={handleChange}
            />
            <input
              type="text"
              name="institution"
              placeholder="Behörde/Institution"
              value={formData.institution}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Ihre Nachricht / Anliegen"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <Button size="4" disabled={status === "sending"}>
              {status === "sending" && <Spinner size="2" loading />}
              {status === "sending" ? "Wird gesendet..." : "Anfrage senden"}
            </Button>
          </form>
          {status === "success" && (
            <p className="mt-2 text-green-600">Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.</p>
          )}
          {status === "error" && (
            <p className="mt-2 text-red-600">Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.</p>
          )}
        </div>
      </SectionWrapper>
    </>
  )
}
