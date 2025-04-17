import { useState } from "react"

export default function SlidePanel({
  content,
  title,
  onClose,
}: {
  content: string
  title: string
  onClose: () => void
}) {
  return (
    <div className={`slide-panel open`} id="slide-panel">
      <div className="slide-panel-header">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <span id="slide-panel-title">{title}</span>
      </div>
      <div className="slide-content" id="slide-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
