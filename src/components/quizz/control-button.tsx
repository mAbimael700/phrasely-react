import { Button } from "../ui/button";

interface CustomButtonProps {
    onClick: () => void;
    icon?: React.ReactNode;
    className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ onClick, icon, className }) => {
    return (
        <Button
            onClick={onClick}
            className={`flex items-center justify-center rounded-lg px-5 py-7 text-lg font-semibold text-gray-100 shadow-lg hover:bg-indigo-900/40 bg-orange-200/20 backdrop-blur-lg border border-white/20 ${className}`}
            type="button"
        >
            {icon && <span>{icon}</span>}
        </Button>
    );
};

