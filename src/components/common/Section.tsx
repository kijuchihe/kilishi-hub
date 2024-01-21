interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  h?: string;
}
const Section = ({ children, className, h }: SectionProps) => {
  return (
    <section
      className={`${
        h ? h : "min-h-screen"
      } bg-dark-300 text-white px-4 md:px-4 lg:px-20 xl:px-20 py-0 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
