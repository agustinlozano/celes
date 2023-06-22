function HighlightText ({ children, customClass }) {
  return <span className={`text-neutral-700 text-5xl font-cute font-bold ${customClass}`}>{children}</span>
}

export default HighlightText
