interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return (
    <h2 className={`text-[32px] max-sm:text-[30px] ${className}`}>
      {children}
    </h2>
  );
};

export default Title;
