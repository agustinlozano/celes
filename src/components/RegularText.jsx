function RegularText ({ children, className = '' }) {
  return <p className={`text-1xl font-lato ${className}`}>{children}</p>
}

export default RegularText
