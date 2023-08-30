export default function SectionContainer({ children, className }) {
  return (
    <div
      className={`px-4 py-16 max-w-screen-md mx-auto bg-cover bg-no-repeat ${className}`}
    >
      {children}
    </div>
  );
}
