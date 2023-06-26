function HighlightText ({ children, customClass = '' }) {
  return <h2 className={`text-5xl font-cute font-bold ${customClass}`}>{children}</h2>
}

export default HighlightText
