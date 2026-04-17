type ContainerProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[88rem]",
};

export function Container({
  children,
  size = "lg",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 lg:px-14 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
