type SlidePanelProps = {
  open: boolean
  title: string
  content: string // as HTML (e.g. from .innerHTML)
  onClose: () => void
}

export default function SlidePanel({ open, title, content, onClose }: SlidePanelProps) {
  return (
    <div id="slide-panel" className={`slide-panel ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="slide-panel-header">
        <button className="close-btn" onClick={onClose} aria-label="Schließen">
          &times;
        </button>
        <span>{title}</span>
      </div>
      <div className="slide-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
