import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Card = ({ children, className, title }: CardProps) => {
  return (
    <div className={cn("glass-panel rounded-xl p-6 space-y-4", className)}>
      {title && (
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default Card;