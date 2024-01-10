const Section = ({ children, className }: React.HTMLProps<HTMLDivElement>) => {
  return <section className={`h-screen ${className}`}>{children}</section>;
};

export default Section;
