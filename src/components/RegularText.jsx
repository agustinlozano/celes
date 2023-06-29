function RegularText ({ children, className = '' }) {
  return <p className={`text-base font-lato ${className}`}>{children}</p>
}

export default RegularText
