export function Title({ children, className }) {
  return <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>;
}

export function Subtitle({ children, className }) {
  return <h3 className={`text-lg font-black ${className}`}>{children}</h3>;
}

export function Paragraph({ children, className }) {
  return <p className={`font-light ${className}`}>{children}</p>;
}
