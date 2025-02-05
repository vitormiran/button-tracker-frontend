import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const ActionButton = ({ onClick, children, className, disabled }: ActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-6 h-auto text-lg transition-all duration-300 hover:scale-105",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default ActionButton;